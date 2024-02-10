import { dbconnection } from "@/libs/database";
import { useradd } from "@/libs/database/model";
import { NextResponse } from "next/server";

export async function GET(){
    await dbconnection()
    console.log("hello")
    const users=await useradd.find().sort({createdAt:-1}).exec()
    return NextResponse.json(users)
}