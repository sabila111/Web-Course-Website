import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../../../firebase/firebase.config";
import axios from "axios";



export const AuthContext = createContext(null)

const auth =getAuth(app)



const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)

const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email,password)
}

const signIn =(email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
         console.log('user in the ', currentUser)
         setLoading(false) 
        //  if(currentUser){
        //     const loggedUser = {email: currentUser.email}
        //     axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials: true})
        //     .then(res =>{
        //         console.log(res.data)
        //     })
        //  }
     })
return () => {
 unSubscribe()
}
 }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn ,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;