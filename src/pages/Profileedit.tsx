import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const Profileedit = () => {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
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
                        <Input type="text" id="fullname" placeholder="Fullname" />
                    </div>
                    <div className="grid w-full my-4 max-w-sm items-center gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
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