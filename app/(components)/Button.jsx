"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useFormStatus } from 'react-dom'

const Button = () => {
      const {pending}=useFormStatus()
      const router=useRouter()
     
    //  if(pending){
    //    router.refresh()
    //     router.push("/blogs")
    //  }
  return (
    <div className='h-8'>
       <button className="w-[100%] rounded-md  hover:text-[1.1rem] hover:bg-black hover:text-white hover:transition-all p-2" type='submit'>{pending?"Adding into database":"ADD"}</button>
    </div>
  )
}

export default Button
