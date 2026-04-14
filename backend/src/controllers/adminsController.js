//Creo un array de funciones 
const adminsController = {};

//Import la colección que vamos a utilizar
import adminsModel from "../models/admins.js";

//SELECT
adminsController.getAdmin = async (req, res) => {
    const admins = await adminsModel.find();
    res.json(admins);
};

//INSERT

/*adminsController.insertAdmin = async (req, res) => {
    //1. Solicito los datos a guardar
    const { name, email, password, isVerified } = req.body;

    //2. Llenar el modelo con estos datos
    const newAdmin = new adminsModel({
        name,
        email,
        password,
        isVerified
    });

    //3. Guardar el empleado en la base de datos
    await newAdmin.save();

    //4. Devuelvo la respuesta
    res.json({message: "Admin saved"});
};*/

//DELETE
adminsController.deleteAdmin = async (req, res) => {
    await adminsModel.findByIdAndDelete(req.params.id);
    res.json({message:"Admin deleted"})
}

//UPDATE
adminsController.updateAdmin = async (req,res) => {

    //1. Solicito los datos a guardar
   const { name, email, password, isVerified } = req.body;

 
    //#2 Actualizo
    await adminsModel.findByIdAndUpdate(
        req.params.id,
        {
            name,
            email,
            password,
            isVerified 
        },
        {new: true},        
    );
 
    res.json({message: "Admin updated"})
};
 
export default adminsController;
