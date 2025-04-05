import { loginUser, passwordUser, registerUser } from "@/types/userInterface";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:3000";
const axiosInstance = axios.create({baseURL : BASE_URL})


// Register Instance
export const createUser = async (data : registerUser) => {
    try{
        const response = await axiosInstance.post("/user/register", data);
        return response.data; // Return response data for success handling
    }catch(error : any){
        if (axios.isAxiosError(error)) {
            throw error
        }
        throw new Error("Network error");
    }
}

// Login
export const logUser = async (data : loginUser) => {
    try {
        const response = await axiosInstance.post("/user/login", data)
        return response.data
    } catch (error : any) {
        if (axios.isAxiosError(error)) {
            throw error
        }
        throw new Error("Network error");
    }
}

// Get User data 
export const getUser = async ( token : string) => {
    try {
        const response = await axiosInstance.get("/user/getuser", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error
        }
        throw new Error("Network error");
    }
}

// Change Password 
export const changePass = async (data : passwordUser, token : string) => {
    try {

        const response = await axiosInstance.patch("/user/changepassword",  data , {
            headers : {
                Authorization: `Bearer ${token}`
            }
        } );
        
        return response.data
    } catch (error : any) {
        if (axios.isAxiosError(error)) {
            throw error
        }
        throw new Error("Network error");
    }
}