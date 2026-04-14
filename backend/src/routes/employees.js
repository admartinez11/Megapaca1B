import express from "express";
import employeesController from "../controllers/employeesController.js"
 
//Routes nos ayuda a colocar los metodos
//que tendra el endpoint
 
const router = express.Router();
 
router.route("/")
.get(employeesController.getEmployee)
 
router.route("/:id")
.put(employeesController.updateEmployee)
.delete(employeesController.deleteEmployee);
 
export default router;