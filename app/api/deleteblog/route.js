import { useradd } from "@/libs/database/model";
import { NextResponse } from "next/server";

export async  function POST(req,{params}){
    const idblog=await req.json()
    console.log(idblog)
 const del= await useradd.deleteOne({_id:idblog.id})
 console.log(del) 
 return NextResponse.json({msg:"success"});
}