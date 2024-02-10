import mongoose from "mongoose";

export async function dbconnection(){
await mongoose.connect(process.env.MONGO).then(()=>{
    console.log("database connected")
}).catch((err)=>{
    console.log(err)
})
}