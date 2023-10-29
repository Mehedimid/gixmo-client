import React from "react";
import {  NavLink } from "react-router-dom";

function Navbar(props) {
  const navlinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addproduct">Add Product</NavLink>
      <NavLink to="/mycart">My Cart</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </>
  );
  return (
    <div>
      <div>
        <h1 className="sticky lg:hidden text-2xl text-white text-center mt-4 font-bold ">
          {" "}
          <span className="text-red-400">Gizmo</span>Genix
        </h1>
      </div>
      <div className="navbar text-white  md:w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu gap-2  text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navlinks}
            </ul>
          </div>

          <h1 className=" btn hidden lg:block btn-ghost normal-case  text-2xl text-white text-center mt-4 font-bold ">
            {" "}
            <span className="text-red-400">Gizmo</span>Genix
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-base">{navlinks}</ul>
        </div>
        <div className="navbar-end">
          {/* <Link to='/register' className="btn btn-error text-white">Sign Up</Link> */}
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img className="bg-white" src={"https://i.ibb.co/kKjDBkF/profile.png"} />
        </div>
      </label>
      <p className="text-white">    </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
