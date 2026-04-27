import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto, { verify } from "crypto";
import nodemailer from "nodemailer";
import HTMLRecoveryEmail from "../utils/sendMailRecovery.js";

import { config } from "../../config.js";

import customerModel from "../models/customers.js";
import { json } from "stream/consumers";

//array de funciones
const recoveryPasswordController = {}

recoveryPasswordController.requestCode = async (req, res) => {
    try {
        const { email } = req.body;

        //validar que el correo exista en la base de datos
        const userFound = await customerModel.findOne({ email });

        if (!userFound) {
            return res.status(404).json({ message: "User not found" });
        }

        //generar el code aleatorio
        const randomCode = crypto.randomBytes(3).toString("hex")

        //guardamos todo en un token
        const token = jsonwebtoken.sign(
            //#1 q vamos a guardar?
            { email, randomCode, userType: "customer", verified: false },
            //#2 clave secreta
            config.JWT.SECRET,
            //#3 cuando expira 
            { expiresIn: "15m" }
        );

        res.cookie("recoveryCokkie", token, {maxAge: 15 * 60 * 1000});

        //enviar el correo con el code
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.email.user_email,
                pass: config.email.user_password,
            },
        });

        const mailOptions = {
            from: config.email.user_email,
            to: email,
            subject: "Codigo de recuperación de contraseña",
            body: "El codigo expira en 15 minutos",
            html: HTMLRecoveryEmail(randomCode),
        };
        
        //#3 enviar el correo
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error", error);
                return res.status(500).json({ message: "Error sending email" });
            }
        });

        return res.status(200).json({ message: "Recovery code sent"})

    }catch (error) {
        console.error("Error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

recoveryPasswordController.verifyCode = async (req, res) => {
    try {
        //#1 solicitamos los datos
        const { code } = req.body;

        //#2 obtenemos la info q está dentro del token
        //accedemos a la cookie
        const token = req.cookies.recoveryCokkie;
        const decoded = jsonwebtoken.verify(token, config.JWT.SECRET);

        //ahora comparo el codigo que el user escribió con el q está dentro del token
        if (code !== decoded.randomCode) {
            return res.status(400).json({ message: "Invalid code" });
        }

        //en cambio, si escribe bien el code
        //vamos a colocar en el token q ya está verificado
        const newToken = jsonwebtoken.sign(
            {email: decoded.email, userType: "customer", verified: true},
            config.JWT.SECRET,
            { expiresIn: "15m" }
        );

        res.cookie("recoveryCokkie", newToken, {maxAge: 15 * 60 * 1000});

        return res.status(200).json({ message: "Code verified successfully" }); 
    
    } catch (error) {
        console.error("error"+error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

recoveryPasswordController.newPassword = async (req, res) => {
  try {
    //#-1 Solicito los datos
    const { newPassword, confirmNewPassword } = req.body;
 
    //Comparo las dos contraseñas
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ message: "password doesnt match" });
    }
 
    //vamos comprobar que la constante verified que está en el token
    //ya esté en true (o sea que haya pasado por el paso 2)
    const token = req.cookies.recoveryCokkie;
    const decoded = jsonwebtoken.verify(token, config.JWT.SECRET);
 
    if (!decoded.verified) {
      return res.status(400).json({ message: "Code not verified" });
    }
 
    /////////
    //Encriptar
    const passwordHash = await bcrypt.hash(newPassword, 10);
 
    //Actualizamos la contraseña en la base de datos
    await customerModel.findOneAndUpdate(
      { email: decoded.email },
      { password: passwordHash },
      { new: true },
    );
 
    res.clearCookie("recoveryCookie");
 
    return res.status(200).json({ message: "Password updated" });
  } catch (error) {
    console.log("error" + error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default recoveryPasswordController;