import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { loginUser } from "@/types/userInterface"
import { useLogin } from "@/services/mutations"

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) { 

  const loginUserMutation = useLogin();

  const [loginData , setLoginData ] = useState<loginUser>({
    email : "",
    password : ""
  })

  const handleChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      
    const {name, value} = event.target;
    setLoginData({
      ...loginData,
      [name] : value
    })
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      loginUserMutation.mutate(loginData)
  }


  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input onChange={handleChange} name="email" type="email" placeholder="m@example.com"  />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input onChange={handleChange} name="password" type="password"  />
        </div>
        {/* On success message */}
        {loginUserMutation.isSuccess && 
                <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
                    <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Logged in Successfully</span> Redirection to the Home page.
                    </div>
                </div>
        }
        {loginUserMutation.isError && 
                <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                <span className="sr-only">Info</span>
                <div>
                    <ul className="text-sm text-red-400 list-disc ml-3">
                    {loginUserMutation.error && (
                        <div className="text-sm text-red-400">
                          {Array.isArray((loginUserMutation.error as any)?.response?.data?.error) ? (
                            <ul>
                              {(loginUserMutation.error as any)?.response?.data?.error.map(
                                (errMsg: string, index: number) => (
                                  <li className="mb-1" key={index}>{errMsg}</li>
                                )
                              )}
                            </ul>
                          ) : (
                            <p>{(loginUserMutation.error as any)?.response?.data?.error}</p>
                          )}
                        </div>
                    )}
                    </ul>
                </div>
                </div>
        }
        <Button type="submit" className="w-full" disabled={loginUserMutation.isPending}>
          Login
        </Button>
        
        
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/register" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
