import express from "express";
import productRoutes from "./src/routes/products.js"
import branchRoutes from "./src/routes/branches.js"
import employeeRoutes from "./src/routes/employees.js";
import reviewRoutes from "./src/routes/reviews.js";

//creo una constante que guarde Express
const app = express();

//que acepte los json desde postman
app.use(express.json());

app.use ("/api/products", productRoutes);
app.use ("/api/branches", branchRoutes);
app.use ("/api/employees", employeeRoutes);
app.use ("/api/reviews", reviewRoutes);

export default app; 