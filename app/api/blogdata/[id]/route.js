import { dbconnection } from "@/libs/database"
import { useradd } from "@/libs/database/model"
import { NextResponse } from "next/server"

export async  function GET(req,{params}){
  
    await dbconnection()

let blogdat
try{
  blogdat= await useradd.findById(params.id)
}
catch(err){
   
}

if(blogdat==null){

    return  NextResponse.json({msg:"failed"})
}
else{

return NextResponse.json(blogdat)
}
}