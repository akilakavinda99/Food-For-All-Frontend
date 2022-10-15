import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(allowedRoles)
    // console.log(auth.roles.find(role => allowedRoles?.includes(role)))
    console.log(auth.roles==allowedRoles)
    console.log(auth)

    // const authcheck=async(e)=>{
    //     e.preventDefault();
    //     if(auth.roles==allowedRoles){
    //         return true;
    //     }
    // }

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="requester/signin" state={{ from: location }} replace />

        // {
        //     if(auth.roles==allowedRoles)
        // }
    );
}

export default RequireAuth;