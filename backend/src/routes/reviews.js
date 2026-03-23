import express from "express";
import reviewsController from "../controllers/reviewsController.js"
 
//Routes nos ayuda a colocar los metodos
//que tendra el endpoint
 
const router = express.Router();
 
router.route("/")
.get(reviewsController.getReview)
.post(reviewsController.insertReviews);
 
router.route("/:id")
.put(reviewsController.updateReview)
.delete(reviewsController.deleteReview);
 
export default router;