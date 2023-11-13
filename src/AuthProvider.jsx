import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "./firebase/firebase.config"
import axios from "axios"


export const AuthContext = createContext(null)

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
   

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    } 

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // on auth state change 
    useEffect(()=>{
       onAuthStateChanged(auth, curUser =>{
              setUser(curUser)
              const userEmail = curUser?.email || user?.email
              const loggedUser = {email: userEmail}
              console.log('user: ',curUser)

              if(curUser){
                axios.post('http://localhost:5000/jwt', loggedUser,  {withCredentials:true})
                .then(res=> {
                  console.log(res.data)
                })
              }
              else{
                axios.post('http://localhost:5000/logout', loggedUser, {withCredentials:true})
                .then(res=>console.log(res.data))
              }
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