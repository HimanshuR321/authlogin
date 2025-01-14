import RegisterForm from "@components/RegisterForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/dist/server/api-utils"
import { authOptions } from "app/api/auth/[...nextauth]/route"

export default async function Register(){
    const session=await getServerSession(authOptions);

    if(session) redirect("/dashboard");

    return <RegisterForm/>
}