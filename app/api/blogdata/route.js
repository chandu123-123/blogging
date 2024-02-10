export const dynamic = 'force-dynamic'
import { useradd } from "@/libs/database/model"
import { NextResponse } from "next/server"

export async  function GET(req){
    console.log("helo")

const dat=await req.json()
console.log(dat)
 const blogdat= await useradd.findById(dat.id)

console.log(blogdat)
return NextResponse.json({msg:true})
}