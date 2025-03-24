import { registerUser } from "@/types/userInterface"
import { useMutation } from "@tanstack/react-query"
import { createUser } from "./api"

// register
export const useRegister = () => {

    return useMutation({
        mutationFn : (data : registerUser) => createUser(data),
        onSuccess : () => {
            
        }
    })

}