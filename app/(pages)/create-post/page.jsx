import Button from "@/app/(components)/Button";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


const page =  () => {
const cookiestore=cookies()
if(!cookiestore.get("loggedin")){
  redirect("/")
}   
  const insert= async (formdata)=>{
    "use server"
    const data=Object.fromEntries(formdata);
    console.log(data)
    const addd=await fetch("http://localhost:3000/api/adduser",{
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
  return (
    <div>
      <form action={insert} className='flex flex-col'>
        <input type="text" placeholder='title' name='title' />
        <input type="text" placeholder='description' name='description' />
        <input type="text" name="image" placeholder="image url"/>
       <Button></Button>
      </form>
    </div>
  )
}

export default page
