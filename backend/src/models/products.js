/*
Campos
    nombre
    descripcion
    price
    stock
*/
 
import {Schema, model} from "mongoose";
 
const productSchema = new Schema({
    nombre: {
        type: String,
    required: true
    },
    description: {
        type: String,
       
    },
    price: {
        type: Number,
    },
    stock: {
        type: Number,
       
    }
},{
    timestamps: true,
    strict: false
});    
 
export default model("products", productSchema)