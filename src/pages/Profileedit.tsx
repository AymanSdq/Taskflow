import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserData } from "@/services/query"





const Profileedit = () => {


    const { data : userData , isLoading : userDataLoading, isError : userDataError, isSuccess : userDataSuccess } = useUserData();



    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {userDataSuccess &&  <>

                  <div className="grid flex-1 text-left text-sm leading-tight">
                    {/* Fullname */}
                    <span className="truncate font-medium">{userData.fullname}</span>
                    {/* Email */}
                    <span className="truncate text-xs">{userData.email}</span>
                  </div>
                </>
              }
            <div className="col-span-1">
                <form action="" className="py-4">
                    <h1 className="text-xl font-bold">User settings : </h1>
                    {/* Image */}
                    <div className="grid w-full my-4 max-w-sm items-center gap-3">
                        <Label htmlFor="picture">Picture</Label>
                        <Input id="picture" type="file" />
                    </div>
                    {/* User */}
                    <div className="grid w-full my-4 max-w-sm items-center gap-3">
                        <Label htmlFor="fullname">Fullname</Label>
                        <Input value={userData.data.fullname} type="text" id="fullname" placeholder="Fullname" />
                    </div>
                    <Button className="my-4">Save</Button>
                </form>
                <form action="" className="py-4">
                    <h1 className="text-xl font-bold">Password settings : </h1>
                    {/* User */}
                    <div className="grid w-full my-4 max-w-sm items-center gap-3">
                        <Label htmlFor="oldpass">Old Password</Label>
                        <Input type="password" id="oldpass" placeholder="Enter old password" />
                    </div>
                    <div className="grid w-full my-4 max-w-sm items-center gap-3">
                        <Label htmlFor="newpass">New Password</Label>
                        <Input type="password" id="newpass" placeholder="Enter new password" />
                    </div>
                    <Button className="my-4">Save</Button>
                </form>
            </div>
            {/* <div className="aspect-video rounded-xl bg-muted/50" />  */}
        </div>
        </div>
    )
}

export default Profileedit