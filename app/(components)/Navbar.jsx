"use client"
import { cookiehandling } from "@/libs/loginserver";
import { decrement, increment } from "@/store/createslice";
import { revalidatePath } from "next/cache";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import logo from "@/app/(images)/logo.png"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = ({ admin }) => {
  const dispatch=useDispatch()
  const checker=useSelector((state)=>state.counter.value)
 const router=useRouter()

 const [size,setsize]=useState(window.innerWidth);  


  return (
    <>
   
      <div className="mt-4 flex gap-5 justify-between items-center  w-[70%] mx-auto ">
      <div>
       <Image src={logo} className="cursor-pointer" width={50} height={50} alt="logo" onClick={()=> router.push("/") }></Image>
     </div>
     {size > 768 ?     
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
            <li className="cursor-pointer list-none" onClick={async ()=>{
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
           
              <Link href="/create-post" prefetch={false}>
                create post
              </Link>
           
          ) : (
            <></>
          )}
        </ul>
: <> <DropdownMenu>
<DropdownMenuTrigger>MENU</DropdownMenuTrigger>
<DropdownMenuContent>
  <DropdownMenuItem>
  <Link href="/" prefetch={false}>
              Home
            </Link>
  </DropdownMenuItem>
  <DropdownMenuSeparator />
  <DropdownMenuItem>
  <Link href="/about-us" prefetch={false}>
              About Us
            </Link>
  </DropdownMenuItem>
  <DropdownMenuItem>
  <Link href="/blogs" prefetch={false}>
              Blogs
            </Link>
  </DropdownMenuItem>
  <DropdownMenuItem>
  {checker? (
            <div className="cursor-pointer" onClick={async ()=>{
              await cookiehandling()

              dispatch(decrement())
      
              router.refresh()
            
            
            }}>
             
                Logout
             
            </div>
          ) : (
            <Link href="/login" prefetch={false}>
              Login
            </Link>
          )}
  </DropdownMenuItem>
  <DropdownMenuItem>
  {checker? (
         
              <Link href="/create-post" prefetch={false}>
                create post
              </Link>
          
          ) : (
            <></>
          )}

  </DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
</>
}
     
      </div>
    </>
  );
};

export default Navbar;
