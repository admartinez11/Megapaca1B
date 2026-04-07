import nodemailer from "nodemailer"; //enviar correos
import crypto from "crypto"; //generar codigo aleatorio
import jsonwebtoken  from "jsonwebtoken"; //token
import bcryptjs from "bcryptjs"; //encriptar

import customerModel from "../models/customers.js";

//array de funciones
const registerCustomerController = {};

registerCustomerController.register = async (req, res) => {
    //#1 Solicitar datos
    const{
        name,
        lastName,
        birthdate,
        email,
        password,
        isVerified
    } = req.body;

    try{

    }catch(error){

    }
}