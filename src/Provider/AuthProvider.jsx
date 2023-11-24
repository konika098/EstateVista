import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { createContext } from "react";
import auth from "../../firebase.config";
import useAxiosPublic from "../Hooks/usePublic/useAxiosPublic";

export const AuthContext = createContext(null)
const google = new GoogleAuthProvider()
// eslint-disable-next-line react-hooks/rules-of-hooks
const axiosPublic= useAxiosPublic()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)

    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, google)

    }
    const updateUserDetails =(name,photo)=>{
        setLoading(true);
        return (updateProfile(auth,{
            displayName:name,
            photoURL:photo
        }))
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                const userInfo={email:currentUser.email};
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access token',res.data.token)
                    }
                })


            }
            else{
                localStorage.removeItem('access token')

            }
            console.log('login hoiche', currentUser)
            setLoading(false)
        });
        return ()=>{
            return unsubscribe();
        }
    }, [])









    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut,
        googleLogin,
        updateUserDetails

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}