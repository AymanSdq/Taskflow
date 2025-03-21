    import { cn } from "@/lib/utils"
    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"
    import { Label } from "@/components/ui/label"

    export function RegisterForm({ className, ...props }: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
        <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-muted-foreground text-sm text-balance">
                Enter your fullname and email below to register to your account
            </p>
        </div>
        <div className="grid gap-6">
            <div className="grid gap-3">
                <Label htmlFor="fullname">Full name</Label>
                <Input id="fullname" type="text" placeholder="Joe Doe" required />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-3">
            <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
            </div>
                <Input id="password" type="password" required />
            </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
                Or continue with
            </span>
            </div>
        </div>
        <div className="text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="underline underline-offset-4">
            Sign in
            </a>

        </div>
        </form>
    )
    }
