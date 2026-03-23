/* 
Campos:
- name: Nombre de la sucursal.
- address: Dirección de la sucursal.
- schedule: Horario de atención de la sucursal.
- isActive: Indica si la sucursal está activa o no (booleano).
*/

import {Schema, model} from "mongoose";

const branchesSchema = new Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  schedule: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
}, {
  timestamps: true,
  strict: false,
});

export default model("Branches", branchesSchema);