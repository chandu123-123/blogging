const { Schema, model, default: mongoose } = require("mongoose");

const userschema = new Schema({
    title:"String",
    description:"String",
    image:"String",
    },{timestamps:{
        createdAt:true,
        updatedAt:true,
    }},
    )
    
const userloginschema = new Schema({
    email:"String",
    password:"String",
    username:"String",
    },{timestamps:{
        createdAt:true,
        updatedAt:true,
    }},
    )
export const useradd=mongoose.models.User || new mongoose.model("User",userschema)
export const userloginadd=mongoose.models.Userdetail || new mongoose.model("Userdetail",userloginschema)