import { loginUser, passwordUser, registerUser } from "@/types/userInterface"
import { useMutation } from "@tanstack/react-query"
import { changePass, createUser, logUser } from "./api"

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
            localStorage.setItem("token", data.token)
        },
        onError: (error : Error) => {
            console.error("❌ Error:", error);
        },
    })
}


export const usePassChange = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("No Token found");
    }

    return useMutation({
        mutationFn : (data : passwordUser) => changePass(data, token),
        onSuccess: (data) => {
            console.log("✅ Success:", data);
        },
        onError : (error : Error) => {
            console.error("❌ Error:", error);
        },
        
    })
}