import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=useContext(AuthContext)
    const {data: isUser, isPending:isUserLoading}=useQuery({
        queryKey:[user?.email,'isUser'],
        queryFn:async()=>{
            const res =await axiosSecure.get(`/user/buyer/${user.email}`);
            return res.data?.user
        } 
      })
      return[isUser,isUserLoading ]
    };


export default useUser;