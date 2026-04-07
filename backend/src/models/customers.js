/*
Campos:

name
LastName
birthday
email
password
isVerified
LoginAttemps
timeout
*/

import{ Schema, model} from "mongoose";

const customersSchema = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    birthday: {
        type: Date
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    isVerified: {
        type: Boolean
    },
    loginAttemps: {
        type: Number
    },
    timeout: {
        type: Date
    },
},
    {
        timestamps: true,
        strict: false
    },
);

export default model("Customers", customersSchema);