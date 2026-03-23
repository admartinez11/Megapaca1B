//Creo un array de funciones 
const reviewsController = {};

//Import la colección que vamos a utilizar
import reviewsModel from "../models/reviews.js";

//SELECT
reviewsController.getReview = async (req, res) => {
    const reviews = await reviewsModel.find();
    res.json(reviews);
};

//INSERT
reviewsController.insertReviews = async (req, res) => {
    //1. Solicito los datos a guardar
    const { idEmployee, idProducts, rating, comment } = req.body;

    //2. Llenar el modelo con estos datos
    const newReview = new reviewsModel({
        idEmployee,
        idProducts, 
        rating, 
        comment
    });

    //3. Guardar el empleado en la base de datos
    await newReview.save();

    //4. Devuelvo la respuesta
    res.json({message: "Review saved"});
};

//DELETE
reviewsController.deleteReview = async (req, res) => {
    await reviewsModel.findByIdAndDelete(req.params.id);
    res.json({message:"Review deleted"})
}

//UPDATE
reviewsController.updateReview = async (req,res) => {

    //1. Solicito los datos a guardar
    const { idEmployee, idProducts, rating, comment } = req.body;

 
    //#2 Actualizo
    await reviewsModel.findByIdAndUpdate(
        req.params.id,
        {
            idEmployee,
            idProducts, 
            rating, 
            comment
        },
        {new: true},        
    );
 
    res.json({message: "Review updated"})
};
 
export default reviewsController;
