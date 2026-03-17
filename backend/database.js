import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/megapacaDB")


 const connection = mongoose.connection;

 connection.on ("open", ()=>{
    console.log("DB is disconnected")
 })

  connection.on ("disconnected", ()=>{
    console.log("DB is connected")
 })

  connection.on ("error", (err)=>{
    console.log("Error found" + err)
 })

