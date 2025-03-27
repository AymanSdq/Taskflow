
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useNavigate } from "react-router"
import { useUserData } from "@/services/query"
import { Skeleton } from "@/components/ui/skeleton"





export function NavUser() {



  const { isMobile } = useSidebar()

  const { data : userData , isLoading : userDataLoading, isError : userDataError, isSuccess : userDataSuccess } = useUserData();


  // Log out method
  const navigate = useNavigate()
  const handleLogout =  async () => {
      localStorage.removeItem('token')
      setTimeout(() => {
        if(!localStorage.getItem("token")){
          navigate("/login")
        }
      }, 1000);
  }



  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>


            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              {userDataSuccess &&  <>
                  <Avatar className="h-8 w-8 rounded-lg">
                    {/* Avatar */}
                      <AvatarImage src={userData.data.avatarurl} alt={userData.data.fullname} />
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    {/* Fullname */}
                    <span className="truncate font-medium">{userData.data.fullname}</span>
                    {/* Email */}
                    <span className="truncate text-xs">{userData.data.email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </>
              }
              {userDataError || userDataLoading &&
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>

              }
            </SidebarMenuButton>

        

          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">

              {userDataSuccess && 
                
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    {/* Avatar */}
                    <AvatarImage src={userData.data.avatarurl} alt={userData.data.fullname} />
                    {/*  */}
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{userData.data.fullname}</span>
                    <span className="truncate text-xs">{userData.data.email}</span>
                  </div>
                </div>
                
              }

              {userDataError || userDataLoading &&
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>

              }
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
