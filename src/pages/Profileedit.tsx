import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { usePassChange } from "@/services/mutations"
import { useUserData } from "@/services/query"
import { passwordUser } from "@/types/userInterface"
import { useState } from "react"


// Call the data and post it so we can updat the suer data 


const Profileedit = () => {

    // Handeling password change
    const changePassMutation = usePassChange()
    const [password , setPassword ] = useState<passwordUser>({
        oldpassword : "",
        newpassword : ""
    })
    const handlePassChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        setPassword({
            ...password,
            [name] : value
        })
    }
    const handlePassSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        changePassMutation.mutate(password)

    }


    const { data : userData , isLoading : userDataLoading, isError : userDataError, isSuccess : userDataSuccess } = useUserData();



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
                <form onSubmit={handlePassSubmit} action="" className="py-4 w-full px-4">
                    <h1 className="text-xl font-bold">Password settings : </h1>
                    {/* User */}
                    <div className="grid w-full my-4 max-w-sm items-center gap-3">
                        <Label htmlFor="oldpass">Old Password</Label>
                        <Input type="password" onChange={handlePassChange} name="oldpassword" placeholder="Enter old password" />
                    </div>
                    <div className="grid w-full my-4 max-w-sm items-center gap-3">
                        <Label htmlFor="newpass">New Password</Label>
                        <Input type="password" onChange={handlePassChange} name="newpassword" placeholder="Enter new password" />
                    </div>
                    <Button className="my-4">Change Password</Button>
                    {changePassMutation.isSuccess && 
                            <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                                <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    <span className="font-medium">Password has been changed Successffully</span>
                                </div>
                            </div>
                    }
                    {changePassMutation.isError && 
                        <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                            <span className="sr-only">Info</span>
                            <div>
                                <ul className="text-sm text-red-400 list-disc ml-3">
                                    {changePassMutation.error && (
                                        <div className="text-sm text-red-400">
                                            {Array.isArray((changePassMutation.error as any)?.response?.data?.error) ? (
                                                <ul>
                                                    {(changePassMutation.error as any)?.response?.data?.error.map((errMsg: string, index: number) => (
                                                        <li className="mb-1" key={index}>{errMsg}</li>
                                                    ))}
                                                </ul>
                                                ) : (
                                                <p>{(changePassMutation.error as any)?.response?.data?.error}</p>
                                                )}
                                        </div>)}
                                </ul>
                            </div>
                        </div>
                    }
                </form>
            </div>
            {/* <div className="aspect-video rounded-xl bg-muted/50" />  */}
        </div>
        </div>
    )
}

export default Profileedit