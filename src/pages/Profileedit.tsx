import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUserData } from "@/services/query"




const Profileedit = () => {


    const { data : userData , isLoading : userDataLoading, isError : userDataError, isSuccess : userDataSuccess } = useUserData();

    console.log(userData)

    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="col-span-1 w-full py-4 px-4 flex flex-col items-center border rounded-md ">
                <div className="w-20 mb-4">
                    {userDataSuccess && <img src={userData.data.avatarurl} alt={userData.data.fullname} />}
                    {userDataError || userDataLoading && <img src="" alt="Avatar" />}
                </div>
                <div className="w-full">
                    <div className="grid w-full my-4 max-w-sm items-center gap-3">
                        <Label htmlFor="fullname">Full name</Label>
                        <Input className="text-white" value={userDataSuccess && userData.data.fullname}  type="text" id="fullname" placeholder="Fullname" disabled/>
                    </div>
                    <div className="grid w-full my-4 max-w-sm items-center gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input value={userDataSuccess && userData.data.email}  type="text" id="email" placeholder="Email" disabled/>
                    </div>
                    <div className="grid w-full my-4 max-w-sm items-center gap-3">
                        <Label htmlFor="email">Date of creation</Label>
                        <Input value={userDataSuccess && userData.data.updated_At}  type="date" id="email" placeholder="Email" disabled/>
                    </div>
                </div>
            </div>

            {/* Formulater */}
            <div className="col-span-1 flex items-center justify-center border rounded-md">
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
                        <Input  type="text" id="fullname" placeholder="Fullname" />
                    </div>
                    <Button className="my-4">Save</Button>
                </form>
            </div>
            <div className="col-span-1 flex items-center justify-center border rounded-md">
                <form action="" className="py-4 w-full px-4">
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