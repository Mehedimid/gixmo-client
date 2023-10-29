import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../AuthProvider";

function Login(props) {
  const {logInUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation().state?.path

//====== sign in with email ======
   const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value 
    const password = e.target.password.value 
    // console.log(email, password)
    
    logInUser(email, password) 
    .then(res => {
      // console.log(res.user)
      navigate(location || '/')
    })
    .catch(error => {
      toast.error(error.message)
    })
   }

  return (
    <>
      <div className="bg-black bg-opacity-90">
        <Navbar></Navbar>
      </div>

      <h1 className="text-3xl font-bold my-6 text-center text-black">
        Login Your Account
      </h1>

      <form
        onSubmit={handleLogin}
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
            Sign In
          </button>
        </div>
        <div className="flex justify-evenly mb-5 items-center">
          <p className="inline">Have not Register?</p>
          <Link to="/register" className="underline  font-semibold text-xl">
            Register
          </Link>
        </div>
        <ToastContainer ></ToastContainer>
      </form>
    </>
  );
}

export default Login;
