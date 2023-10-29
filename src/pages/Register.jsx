import { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

import { FcGoogle } from 'react-icons/fc';


function Register(props) {
  const {createUser}= useContext(AuthContext)
  const provider = new GoogleAuthProvider()

    //====== Log in with google =====
    const googleHandler = () =>{
      signInWithPopup(auth, provider)
      .then(result => {
        toast.success('wow!!! Successfully Registered!!')
      })
      .catch(error => toast.error(error.message))
    }


  // ===== log in with email and pass =====
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    // condition
    const uppercase = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(password);
    if (password.length < 6) {
      toast.error("error: password must be 8 character");
      return;
    } else if (!uppercase) {
      toast.error("error: password need uppercase");
      return;
    } else if (!hasSpecialCharacter) {
      toast.error("error : no special charachter");
      return;
    }

    
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success('wow!!! Successfully Registered!!')
        e.target.email.value = ''
        e.target.password.value = ""
        // navigate('/')
      })
      .catch((error) => toast.error(error.message));

  }

  return (
    <>
      <div className="bg-black bg-opacity-90">
        <Navbar></Navbar>
      </div>

      <h1 className="text-3xl font-bold my-6 text-center text-black">
        Register Your Account
      </h1>

      <div className="mt-5 flex justify-center">
        <button onClick={googleHandler} className="btn btn-ghost  btn-outline  w-3/12 ">
        <span className="text-2xl"> <FcGoogle/></span> Login with Google
        </button>
      </div>

      <form
        onSubmit={handleRegister}
        className="border w-11/12 md:w-7/12 mb-20 mx-auto bg-neutral-700 shadow-xl bg-opacity-10 space-y-6 mt-12 md:px-16 py-5">
        <div className="  gap-10 ">
          <div className="w-full">
            <h2 className="text-lg mb-2 text-slate-700">email:</h2>
            <input
              type="email"
              placeholder="type email "
              name="email"
              className="border p-2  w-full border-black rounded"
            />
          </div>
          <div className="w-full">
            <h2 className="text-lg mb-2 text-slate-700">password:</h2>
            <input
              type="password"
              placeholder="type password "
              name="password"
              className="border p-2  w-full border-black rounded"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            value="Add Coffe"
            className="w-full text-white font-bold bg-black p-2">
            Register
          </button>
        </div>
        <div className="flex justify-evenly mb-5 items-center">
          <p className="inline">Already Registered?</p>
          <Link to="/login" className="underline  font-semibold text-xl">
            Log In
          </Link>
        </div>
        <ToastContainer ></ToastContainer>
      </form>
    </>
  );
}

export default Register;
