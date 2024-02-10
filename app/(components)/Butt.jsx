"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Butt = ({ id }) => {
  const router = useRouter();
  console.log("checking");
  console.log(id);
  return (
    <div className="text-right ">
      <button
        className=" flex justify-end bg-red-600 text-white p-2 rounded-md text-right "
        onClick={async () => {
          const del = await fetch(`http://localhost:3000/api/deleteblog`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          });
          const check = await del;
          if (del) {
            console.log("checking");
            router.refresh();
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Butt;
