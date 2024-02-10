import { dbconnection } from "@/libs/database"
import { useradd } from "@/libs/database/model"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(req){
     const body=await req.json()
   const {title,description,image}=body
   await dbconnection()

    const userinsert=useradd({
        title,
        description,
        image,
    })
    const inserted=await userinsert.save()
    if(inserted){
        console.log("success")
    }
    
    revalidatePath("/blogs")
    return NextResponse.json({msg:"inserted"})
}