import React from "react";
import Navbar from "../Components/Navbar";

function Register(props) {
    const handleRegister = e =>{
        e.preventDefault()
    }
  return (
    <>
      <div className="bg-black bg-opacity-90">
        <Navbar></Navbar>
      </div>

      <form
        onSubmit={handleRegister}
        className="border w-11/12 md:w-7/12 mb-20 mx-auto bg-neutral-700 shadow-xl bg-opacity-10 space-y-6 mt-12 md:px-16 py-5">
        <h1 className="text-3xl font-bold my-6 text-center text-black">
          Register Your Account
        </h1>


        {/* photo url  */}
        <div className="  gap-10 ">
          <div className="w-full">
            <h2 className="text-lg mb-2 text-slate-700">email:</h2>
            <input
              type="email"
              placeholder="type email url"
              name="email"
              className="border p-2  w-full border-black rounded"
            />
          </div>
          <div className="w-full">
            <h2 className="text-lg mb-2 text-slate-700">password:</h2>
            <input
              type="password"
              placeholder="type password url"
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
      </form>
    </>
  );
}

export default Register;
