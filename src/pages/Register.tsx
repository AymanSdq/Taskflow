import { RegisterForm } from "@/components/register-form"
import { useEffect } from "react"
import { useNavigate } from "react-router"

export default function Register() {

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token){
            navigate("/")
        }

    }, [])
    
    return (
        <div className="grid dark: min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                </div>
                <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-xs">
                    <RegisterForm />
                </div>
                </div>
            </div>
            <div className="relative hidden bg-muted lg:block">
                <img
                src="/registerimage.png"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
