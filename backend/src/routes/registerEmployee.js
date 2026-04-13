import express from "express";
import registerEmployeeController from "../controllers/registerEmployees.js";

const router = express.Router();

router.route("/").post(registerEmployeeController.register);
router.route("/verifyCodeEmail").post(registerEmployeeController.verifyCode);

export default router;