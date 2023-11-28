import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from "@tanstack/react-query";

const useAgent = () => {
    const axiosSecure = useAxiosSecure();
    const {user}=useContext(AuthContext)
    const {data: isAgent, isPending:isAgentLoading}=useQuery({
        queryKey:[user?.email,'isAgent'],
        queryFn:async()=>{
            const res =await axiosSecure.get(`/user/agent/${user.email}`);
            return res.data?.agent
        } 
      })
      return[isAgent,isAgentLoading ]
    };


export default useAgent;