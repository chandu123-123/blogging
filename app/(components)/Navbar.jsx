"use client"
import { cookiehandling } from "@/libs/loginserver";
import { decrement, increment } from "@/store/createslice";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



const Navbar = ({ admin }) => {
  const dispatch=useDispatch()
  const checker=useSelector((state)=>state.counter.value)
 const router=useRouter()

  


  return (
    <>
      <div className="mt-4">
        <ul className="flex justify-center gap-5">
          <li>
            <Link href="/" prefetch={false}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" prefetch={false}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/about-us" prefetch={false}>
              About Us
            </Link>
          </li>

          {checker? (
            <li className="cursor-pointer" onClick={async ()=>{
              await cookiehandling()

              dispatch(decrement())
      
              router.refresh()
              console.log(checker)
            
            }}>
             
                Logout
             
            </li>
          ) : (
            <Link href="/login" prefetch={false}>
              Login
            </Link>
          )}
          {checker? (
            <li>
              <Link href="/create-post" prefetch={false}>
                create post
              </Link>
            </li>
          ) : (
            <></>
          )}
        </ul>
        {/* <div>
            <h1>{counter}</h1>
            <button onClick={()=>{
                console.log("clicked");
                dispatch(increment())}}>left</button>
            <button onClick={()=>{
                console.log("clicked");
                dispatch(decrement())}}>right</button>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
