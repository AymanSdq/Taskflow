
import { AppSidebar } from "@/dashboardcomp/app-sidebar"
import { SiteHeader } from "@/dashboardcomp/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router"




    const Dashboard = () => {
    return (
        <div className="[--header-height:calc(theme(spacing.14))]">
        <SidebarProvider className="flex flex-col">
            <SiteHeader />
            <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
                <Outlet />
            </SidebarInset>
            </div>
        </SidebarProvider>
        </div>
    )
    }

export default Dashboard