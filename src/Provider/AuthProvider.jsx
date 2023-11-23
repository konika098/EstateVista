import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { createContext } from "react";
import auth from "../../firebase.config";

export const AuthContext = createContext(null)
const google = new GoogleAuthProvider()
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
            console.log('login hoiche', currentUser)
            setLoading(false)
        });
        return unsubscribe();
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