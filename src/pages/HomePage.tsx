import { useNavigate } from "react-router"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"




const HomePage = () => {

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

    setTimeout(() => {
        navigate("/login")
    }, 500 )    

    return (
        <>
            <div className="fixed z-50 bottom-4 right-4" onClick={themeHandler}>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </div>
        </>
    )
    }

export default HomePage