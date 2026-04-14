import express from "express";
import productRoutes from "./src/routes/products.js"
import branchRoutes from "./src/routes/branches.js"
import employeeRoutes from "./src/routes/employees.js";
import reviewRoutes from "./src/routes/reviews.js";
import customerRoutes from "./src/routes/customer.js";
import adminRoutes from "./src/routes/admins.js";
import registerCustomerRoutes from "./src/routes/registerCustomer.js";
import registerEmployeeRoutes from "./src/routes/registerEmployee.js";
import registerAdminRoutes from "./src/routes/registerAdmin.js";
import cookieParser from "cookie-parser";
import loginRoutes from "./src/routes/login.js"

//creo una constante que guarde Express
const app = express();

app.use(cookieParser());

//que acepte los json desde postman
app.use(express.json());

app.use ("/api/products", productRoutes);
app.use ("/api/branches", branchRoutes);
app.use ("/api/employees", employeeRoutes);
app.use ("/api/reviews", reviewRoutes);
app.use ("/api/customers", customerRoutes);
app.use ("/api/admins", adminRoutes);
app.use ("/api/registerCustomer", registerCustomerRoutes);
app.use ("/api/registerEmployee", registerEmployeeRoutes);
app.use ("/api/registerAdmin", registerAdminRoutes);
app.use("/api/login", loginRoutes);

export default app; 