"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useFormStatus } from 'react-dom'

const Button = () => {
      const {pending}=useFormStatus()
      const router=useRouter()
      console.log(pending)
    //  if(pending){
    //    router.refresh()
    //     router.push("/blogs")
    //  }
  return (
    <div>
       <button type='submit'>{pending?"Adding into database":"Add"}</button>
    </div>
  )
}

export default Button
