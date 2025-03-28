import { LoginForm } from "@/components/login-form"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"



export default function Login() {

    const { setTheme } = useTheme()
            
    const [changeTheme , setChangeTheme] = useState(true)
    
    const themeHandler = () => {
        setChangeTheme(prev => !prev)
        if(changeTheme){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token){
            navigate("/dashboard")
        }

    }, [])

    return (
        <div className="grid min-h-svh lg:grid-cols-2">

            <div className="fixed z-50 bottom-4 right-4" onClick={themeHandler}>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </div>

            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                </div>
                <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-xs">
                    <LoginForm />
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
