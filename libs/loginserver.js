"use server";

import { revalidatePath } from "next/cache";
import { userloginadd } from "./database/model";
import { dbconnection } from "./database";
import { cookies } from "next/headers";

export const loginuser = async (formdata) => {
 await dbconnection()
 const cookiestore=cookies()
console.log("hello")
  const userdata = await Object.fromEntries(formdata);
  const {email,password,key}=userdata
  if(!email||!password||!key){
     return false;
  }
  console.log("hello")
  if (key == process.env.SECRET) {
     const user=await userloginadd.find({email})
     if(user.length!=0){
     console.log(user) 
    cookiestore.set("loggedin",true)
    return userdata;
           }
      else{
        return false;
      }
    }
  }
 
;
export const cookiehandling=async ()=>{
  const cookiestore=cookies()
  cookiestore.delete("loggedin",false);
  revalidatePath("/create-post")
  
}
