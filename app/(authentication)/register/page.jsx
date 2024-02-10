"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { userregister } from "@/app/api/register/route";
import Link from "next/link";
const page = () => {
  const router = useRouter();
  return (
    <div>
      <form
        action={async (formdata) => {
          const result = await userregister(formdata);

          if (result) {
            console.log("successfull");

            router.push("/login");
          } else {
            alert("Enter correct details");
          }
        }}
        className="bg-gray-400 bg-opacity-75 backdrop-blur-lg flex flex-col text-center items-center mt-10  p-3 w-96 ml-auto mr-auto rounded-md"
      >
        <h1 className=" text-5xl mb-1 font-semibold">REGISTER</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="m-4 border-4 p-2 border-black-1 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className=" border-4 p-2 border-black-1 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className=" border-4 p-2 border-black-1 rounded-md"
        />

        <Button className="mt-3">Submit</Button>
        <div className="flex gap-2">
          <h1 className="text-red-600 font-semibold">already user ?</h1>
          <Link href={"/login"} className="underline">
            login{" "}
          </Link>
        </div>
      
      </form>
    </div>
  );
};

export default page;
