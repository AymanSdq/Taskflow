import { loginUser, registerUser } from "@/types/userInterface"
import { useMutation } from "@tanstack/react-query"
import { createUser, logUser } from "./api"

// register
export const useRegister = () => {

    return useMutation({
        mutationFn : (data : registerUser) => createUser(data),
        onSuccess: (data) => {
            console.log("✅ Success:", data);
        },
        onError: (error : Error) => {
            console.error("❌ Error:", error);
        },
        
        
    })

}


export const useLogin = () => {
    
    return useMutation({
        mutationFn : (data : loginUser) => logUser(data),
        onSuccess: (data) => {
            console.log("✅ Success:", data);
        },
        onError: (error : Error) => {
            console.error("❌ Error:", error);
        },
    })
}