import { useQuery } from "@tanstack/react-query"
import { getAllTodos, getUser } from "./api";

export const useUserData = () => {
    const token = localStorage.getItem("token");
    
    return useQuery({
        queryKey : ["userdata"],
        queryFn : () => getUser(token as string),
        enabled: !!token,
    })

}


export const useGetAllTasks = () => {
    const token = localStorage.getItem("token");

    return useQuery({
        queryKey : ["alltasks"],
        queryFn : () => getAllTodos(token as string),
        enabled: !!token
    })
}