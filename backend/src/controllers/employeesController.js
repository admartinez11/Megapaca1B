//Creo un array de funciones 
const employeesController = {};

//Import la colección que vamos a utilizar
import employeesModel from "../models/employees.js";

//SELECT
employeesController.getEmployee = async (req, res) => {
    const employees = await employeesModel.find();
    res.json(employees);
};

//INSERT
employeesController.insertEmployee = async (req, res) => {
    //1. Solicito los datos a guardar
    const { name, lastName, salary, DUI, phone, email, password, idBranches } = req.body;

    //2. Llenar el modelo con estos datos
    const newEmployee = new employeesModel({
        name,
        lastName,
        salary,
        DUI,
        phone,
        email,
        password,
        idBranches
    });

    //3. Guardar el empleado en la base de datos
    await newEmployee.save();

    //4. Devuelvo la respuesta
    res.json({message: "Employee saved"});
};

//DELETE
employeesController.deleteEmployee = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id);
    res.json({message:"Employee deleted"})
}

//UPDATE
employeesController.updateEmployee = async (req,res) => {

    //1. Solicito los datos a guardar
    const { name, lastName, salary, DUI, phone, email, password, idBranches } = req.body;

 
    //#2 Actualizo
    await employeesModel.findByIdAndUpdate(
        req.params.id,
        {
            name,
            lastName,
            salary,
            DUI,
            phone,
            email,
            password,
            idBranches  
        },
        {new: true},        
    );
 
    res.json({message: "Employee updated"})
};
 
export default employeesController;
