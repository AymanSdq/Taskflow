import { loginUser, registerUser } from "@/types/userInterface";
import axios from "axios";

const BASE_URL = "http://localhost:3000";
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
export const getUser = async ( data : string ) => {
    try {
        const response = await axios.get("/user/getuser")
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error
        }
        throw new Error("Network error");
    }
}