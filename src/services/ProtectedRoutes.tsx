import { Navigate } from "react-router";

interface ProtectedRoutes {
    children: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutes> = ({children}) => {
    
    const token = localStorage.getItem("token")

    if(!token){
        return <Navigate to="/login" replace/>
    }
    
    return children
}

export default ProtectedRoutes