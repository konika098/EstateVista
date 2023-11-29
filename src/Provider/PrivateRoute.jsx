import { useContext } from "react";
import PropTypes from "prop-types"
import { Navigate, useLocation,   } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Loader from "../Component/Loader/Loader";


const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location = useLocation();
   
    console.log(loading)
    if (loading) {
        return <Loader/>
    }
    
  

    if(user){
        return children 
    }
    return <Navigate state={location.pathname} to="/contact" replace></Navigate>;
    
};


export default PrivateRoute;
PrivateRoute.propTypes = {children:PropTypes.node}