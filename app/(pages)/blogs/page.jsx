import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Butt from "@/app/(components)/Butt";
import { cookies } from "next/headers";

const page = async () => {
  const allusers = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/allusers`, {
    cache: "no-store",
  });
  const data = await allusers.json();
  const cookiestore=cookies();
  return (
    <div className="grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-10 m-3 ">
      {data.map((e, index) => (
        <>
    
          <Card key={e._id} className="flex flex-col items-center justify-center h-80">
          <Link key={e._id} href={`${process.env.NEXT_PUBLIC_BASE_API_URL}/blogs/${e._id}`} user={e}>
            <CardHeader className="w-[20rem] ">
              <div className="flex justify-center relative aspect-[500/300]">
                <Image src={e.image} width={100} height={100} alt="not found"></Image>
              </div>
              <CardTitle>{
              e.title.length>40?
             <>{e.title.slice(0,40)}...</> : e.title.slice(0,40)}</CardTitle>
              <CardDescription>
                {e.description.slice(0, 40)}...
              </CardDescription>
            
            </CardHeader>
            {/* <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
            </Link>
            {cookiestore.get("loggedin")&& e._id && <Butt id={e._id}></Butt>}
          </Card>
      
  
        </>
      ))}
    </div>
  );
};

export default page;
