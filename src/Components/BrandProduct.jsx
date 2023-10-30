import React from "react";
import Navbar from "./Navbar";

function BrandProduct(props) {
  return (
    <>
      <div className="bg-black bg-opacity-90">
        <Navbar></Navbar>
      </div>

      {/* ======= sliders ====== */}
      <div className="my-20">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/wY8ZkkL/iphone.jpg"
              className="w-full h-[50vh]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://img.freepik.com/premium-psd/neon-device-concept-mock-up_23-2148627500.jpg?w=826"
              className="w-full h-[50vh]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://static-cf1.gear4music.com/resources/av-imagery/pg-bnnrs/LG-banner-dt.jpg"
              className="w-full h-[50vh] object-cover"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandProduct;
