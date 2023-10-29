import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase/firebase.config';


export const AuthContext = createContext(null)

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
   

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
       onAuthStateChanged(auth, user =>{
              setUser(user)
              setLoading(false)
       })
    },[])

   const authInfo = {
    createUser, logInUser, logOut, user, loading
   }

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
}

export default AuthProvider;