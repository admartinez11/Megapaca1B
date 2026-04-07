import customerModel from "../models/customers.js";

//Array de funciones
const customerController ={};

//SELECT
customerController.getCustomer = async (req, res) => {
    try{
        const customers = await customerModel.find();
        return res.status(200).json(customers);
    }catch(error){
        console.log("error" + error);
        return res.status(500).json({message: "Internal serve error"})
    }
};

//UPDATE
customerController.updateCustomer = async (req, res) => {
    try{
        let{
            name,
            lastName,
            birthdate,
            email,
            password,
            isVerified,
            loginAttemps,
            timeOut,
        } = req.body;

        //Validaciones
        name = name?.trim()
        email = email?.trim()

        //Valores requires
        if(!name || !email || !password){
            return res.starus(400).json({message: "Fields required"})
        }

        //Validación de fechas
        if(birthdate > new Date || birthdate < new Date("1901-01-01")){
            return res. status(400).json({message: "Invalid date"})
        }

        const customerUpdated = await customerModel.findByIdAndUpdate(
            req.params.id,
            {
                name,
                lastName,
                birthdate,
                email,
                password,
                isVerified,
                loginAttemps,
                timeOut,
            },
            {new: true},
        );

        if(!customerUpdated){
            return res.status(404).json({message: "Customer not found"})
        }

        return res.status(200).json({message: "Customer updated"});

    } catch (error) {
        console.log("error" + error);
        return res.status(500).json({message: "Internal server error"})
    }
};

//ELIMINAR
customerController.deleteCustomer = async (req, res) => {
    try{
        const deleteCustomer = customerModel.findByIdAndDelete(req.params.id);

        //Si no se elimina es por que no encontró el id
        if(!deleteCustomer){
            return res.status(404).json({message: "Customer not found"})
        }

        return req.status(200).json({message: "customer deleted"});
    }catch(error){
        console.log("error" + error);
        return res.status(500).json({message: "Internal serve error"});
    }
};

export default customerController;