import { getCurrentSession } from "@/actions/auth";
import { readFileSync } from "fs";
import { redirect } from "next/navigation";

const SignUpPage = async() => {

    const { user } = await getCurrentSession();

    if(user) {
        return redirect("/");
    }

    return (
        <div>page</div>
    )
} 

export default SignUpPage