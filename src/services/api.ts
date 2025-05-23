import { loginUser, passwordUser, registerUser } from "@/types/userInterface";
import axios from "axios";
import { data } from "react-router";

const BASE_URL = "http://192.168.1.120:3000";
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

// Get all todos
export const getAllTodos = async (token : string) => {
    try {
        const response = await axiosInstance.get("/tasks/alltasks", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error : any) {
        if (axios.isAxiosError(error)) {
            throw error
        }
        throw new Error("Network error");
    }
}

// Delete oneTodo
export const deleteTodo = async (token : string, taskid : string) => {
    try {
        const response = await axiosInstance.delete(`/tasks/deletetask/${taskid}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error : any) {
        if (axios.isAxiosError(error)) {
            throw error
        }
        throw new Error("Network error");
    }
}