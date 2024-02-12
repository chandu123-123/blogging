import Button from "@/app/(components)/Button";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export const metadata = {
  title:"create-post",
  description: "In this page we create a post which contains title, links and description",
};
let alert=false
const page =  () => {
const cookiestore=cookies()
if(!cookiestore.get("loggedin")){
  redirect("/")
}   

  const insert= async (formdata)=>{
    "use server"
    const data=Object.fromEntries(formdata);
  
    const {title,description,image}=data
   
    if(!title || !description || !image){
       
    
    }
    else{
    const addd=await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/adduser`,{
      method:"POST",
      body:JSON.stringify(data),
    })
    const result=await addd.json()
    console.log(result)
    revalidatePath("/blogs")
    if(result){
      redirect("/blogs")
    }
  }
  }
  return (
    <div className="flex w-[15rem] mx-auto mt-8">
      <form action={insert} className='flex border-2 p-5 flex-col text-center gap-3'>
        <h1 className="font-medium text-[1.4rem]">CREATE - POST</h1>
        <input type="text" className="border-2 border-black p-1 rounded-md" placeholder='title' name='title' />
        <input type="text" className="border-2 border-black p-1 rounded-md" placeholder='description' name='description' />
        <input type="text" className="border-2 border-black p-1 rounded-md" placeholder='Links' name='links' />
        <input type="text" className="border-2 border-black p-1 rounded-md" name="image" placeholder="image url"/>
       <Button ></Button>
      </form>
   
    </div>
  )
}

export default page
