/*
Campos:

name
email
password
isVerified
*/

import{ Schema, model} from "mongoose";

const adminsSchema = new Schema({
    name: {
        type: String
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

},
    {
        timestamps: true,
        strict: false
    },
);

export default model("Admins", adminsSchema);