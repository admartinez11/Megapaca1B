import express from "express";
import productRoutes from "./src/routes/products.js"

//creo una constante que guarde Express
const app = express();

//que acepte los json desde postman
app.use(express.json());

app.use ("/api/products", productRoutes);

export default app; 