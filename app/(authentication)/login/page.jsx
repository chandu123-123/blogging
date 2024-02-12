"use client";
import React from "react";
import { loginuser } from "@/libs/loginserver";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { increment,decrement } from "@/store/createslice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
const Page = () => {
  const dispatch = useDispatch();
  const checker = useSelector((state) => state.counter.value);

  const router = useRouter();
  return (
    <div className="flex justify-center">
      <form
        action={async (formdata) => {
          const result = await loginuser(formdata);
          const res = await result;
          if (!result) {
            alert("enter valid details");
          } else {
            await dispatch(increment())
         
            const { email, password, key } = result;

         
            router.replace("/");
          }
        }}
        className="bg-gray-400 bg-opacity-75 backdrop-blur-lg flex flex-col text-center items-center mt-10  p-3 w-96 ml-auto mr-auto rounded-md"
      >
        <h1 className=" font-semibold text-5xl mb-5">LOGIN</h1>
        <input
          type="email"
          name="email"
          placeholder="email"
          className=" border-3 p-2 border-black-1 rounded-md m-1"
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          className=" border-3 p-2 border-black-1 rounded-md"
        />
        <label htmlFor="" className="font-extralight">only Admins Allowed</label>
        <input
          type="text"
          name="key"
          placeholder="secret key"
          className=" border-3 p-2 border-black-1 rounded-md"
        />
        <Button className="mt-3">Submit</Button>
        <div className="flex gap-2">     
       <h1 className="text-red-600 font-semibold">Not registered ?</h1>
      <Link href={"/register"} className="underline">Register</Link>
      </div>

      </form>
      
    </div>
  );
};

export default Page;
