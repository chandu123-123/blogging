"use server"

import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(){
    const cookiestore=cookies()
    cookiestore.set("loggedin",false)
    console.log(cookiestore.delete("loggedin"))
    console.log("hello")
    return NextResponse.json({msg:"success"})
}