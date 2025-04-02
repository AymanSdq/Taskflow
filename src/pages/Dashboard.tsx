
import { AppSidebar } from "@/dashboardcomp/app-sidebar"
import { SiteHeader } from "@/dashboardcomp/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"




const Dashboard = () => {
//   need post


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

    return (
        <div className="[--header-height:calc(theme(spacing.14))]">
        <SidebarProvider className="flex flex-col">
            <SiteHeader />
            <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
                <Outlet />
                <div className="fixed z-50 bottom-4 right-4" onClick={themeHandler}>
                    <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                </div>
            </SidebarInset>
            </div>
        </SidebarProvider>
        </div>
    )
    }

export default Dashboard