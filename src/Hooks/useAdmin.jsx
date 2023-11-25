import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from '../Hooks/useAxiosSecure'

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
  const {user}=useContext(AuthContext)
  const {data: isAdmin, isPending:isAdminLoading}=useQuery({
    queryKey:[user?.email,'isAdmin'],
    queryFn:async()=>{
        const res =await axiosSecure.get(`/user/admin/${user.email}`);
        return res.data?.admin
    } 
  })
  return[isAdmin,isAdminLoading ]
};

export default useAdmin;