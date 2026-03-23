/*
Campos:
- name: Nombre del empleado.
- lastName: Apellido del empleado.
- salary: Salario del empleado.
- DUI: Documento Único de Identidad del empleado.
- phone: Número de teléfono del empleado.
- email: Correo electrónico del empleado.
- password: Contraseña del empleado (en caso de que se requiera acceso al sistema).
- idBranches: Referencia a la sucursal a la que pertenece el empleado (relación con la colección de sucursales).
*/

import mongoose, { Schema, model } from "mongoose";

const employeesSchema = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    salary: {
        type: Number
    },
    DUI: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    idBranches: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branches"
    }
}, {
    timestamps: true,
    strict: false,
});

export default model("Employees", employeesSchema);