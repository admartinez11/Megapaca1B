/*
Campos:
- idEmployee
- idProducts
- rating(number)
- comment
*/

import mongoose, { Schema, model } from "mongoose";

const reviewsSchema = new Schema({
    idEmployee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employees"
    },
    idProducts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    },
    rating: {
        type: Number
    },
    comment: {
        type: String
    }
}, {
    timestamps: true,
    strict: false,
});

export default model("Reviews", reviewsSchema);