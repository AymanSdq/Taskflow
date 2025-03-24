import { registerUser } from "@/types/userInterface";
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