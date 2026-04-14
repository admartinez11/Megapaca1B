import express from "express";
import registerAdminsController from "../controllers/registerAdminsController.js";

const router = express.Router();

router.route("/").post(registerAdminsController.register);
router.route("/verifyCodeEmail").post(registerAdminsController.verifyCode);

export default router;