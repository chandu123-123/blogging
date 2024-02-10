
import Image from "next/image";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const data = { id: params.blog };
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/blogdata/${params.blog}`);
  const dat = await res.json();
  if(dat.msg){
    notFound()
  }

  if(!dat._id){
  
    notFound()
  }
  return (
    <div className="mb-[3rem] max-w-70% sm : flex sm: flex-col justify-center gap-4 items-center mt-4 md:flex  lg:flex">
      <div>
        <Image
          src={dat.image}
          alt="not found"
          width={400}
          height={400}
          className="bg-red-500"
        ></Image>
      </div>
      <div className="flex flex-col justify-start items-start w-3/4">
        <h1 className="font-bold text-[50px]">Title</h1>
        <p className="text-[2rem]">{dat.title}</p>
        <h1 className="font-bold text-[50px]">Description</h1>
        <p>{dat.description
        
        }</p>
      </div>
    </div>
  );
};

export default page;
