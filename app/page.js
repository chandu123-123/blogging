import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-[500px] w-screen justify-center font-bold  items-center text-red-500">
      <h1 className=" text-7xl  hover:text-8xl cursor-pointer transition-all">
        Blogging
      </h1>
    </div>
  );
}
