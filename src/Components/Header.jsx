import React from "react";
import Navbar from "./Navbar";

function Header(props) {
  return (
    <>
      <div
        className=" min-h-[100vh]  brightness-50 absolute top-0 left-0 right-0"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2019/09/18/21/12/dark-4487690_1280.jpg)",
        }}>
        {" "}
      </div>

      {/* navbar div  */}
      <div className="relative ">
        <Navbar></Navbar>
      </div>

      {/* banner div */}
      <div className="relative text-white lg:flex justify-center my-auto h-[500px] ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold">The Ultimate Tech Showdown</h1>
            <p className=" py-3 text-sm md:text-base md:py-6">

            "Experience the future of tech with us! Discover an exclusive world of cutting-edge electronics and irresistible offers. Dive into innovation, shop with confidence, and elevate your tech game. Your dreams, our reality – shop now!"
            </p>
            <button className="btn btn-error">Get Registered</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
