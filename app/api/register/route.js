"use server";

import { dbconnection } from "@/libs/database";
import { userloginadd } from "@/libs/database/model";
import { revalidatePath } from "next/cache";


export const userregister = async (formdata) => {

  const {username,email,password} = await Object.fromEntries(formdata);
if(!username||!email||!password){
    return false;
}
await dbconnection()
  const check=await userloginadd.find({email})
  console.log(check)
  if(check.length!=0){
    console.log("already user")
      return true;
  }
  else{
    console.log("created")
    const newuser= await userloginadd({email,password,username})
    newuser.save()
      console.log("created user")
      return true;
    }

  return false;
};
