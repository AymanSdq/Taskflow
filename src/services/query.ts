import { useQuery } from "@tanstack/react-query"
import { getUser } from "./api";

export const useUserData = () => {
    const token = localStorage.getItem("token");
    
    return useQuery({
        queryKey : ["userdata"],
        queryFn : () => getUser(token as string),
        enabled: !!token,
    })

}