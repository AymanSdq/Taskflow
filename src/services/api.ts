import { registerUser } from "@/types/userInterface";
import axios from "axios";

const BASE_URL = "http://localhost:3000";
const axiosInstance = axios.create({baseURL : BASE_URL})


// Register Instance
export const createUser = async (data : registerUser) => {
    
    await axiosInstance.post('/user/register', data)
}