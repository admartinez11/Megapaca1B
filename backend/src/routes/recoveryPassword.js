import express from "express";
import recoveryPasswordController from "../controllers/recoveryPasswordController.js"

//Utilizo el Router de Express para colocar los métodos (GET, POST, PUT, DELETE) para mi endpoint

const router = express.Router();

router.route("/requestCode")
.post(recoveryPasswordController.requestCode);

router.route("/verifyCode")
.post(recoveryPasswordController.verifyCode);

router.route("/newPassword")
.post(recoveryPasswordController.newPassword);


export default router;