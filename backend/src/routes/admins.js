import express from "express";
import adminsController from "../controllers/adminsController.js"

//Utilizo el Router de Express para colocar los métodos (GET, POST, PUT, DELETE) para mi endpoint

const router = express.Router();

router.route("/")
.get(adminsController.getAdmin);

router.route("/:id")
.put(adminsController.updateAdmin)
.delete(adminsController.deleteAdmin);
export default router;