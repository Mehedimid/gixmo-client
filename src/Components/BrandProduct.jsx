import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, useLoaderData } from "react-router-dom";

function BrandProduct({ brandName }) {
  const loadedProducts = useLoaderData();
  console.log(brandName);
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

      {/* ========== products ======== */}
      <section className="my-24 mx-auto w-10/12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loadedProducts.length &&
            loadedProducts.map((product) => (
              <div className="card card-side justify-center items-center lg:flex-row flex-col shadow-xl bg-orange-600 bg-opacity-10 p-2 ">
                <div className="lg:w-2/5 ">
                  <img
                    className="min-w-full h-[200px] "
                    src={
                      product.photo
                        ? product.photo
                        : "https://i.ibb.co/WtR37VL/images-q-tbn-ANd9-Gc-S2b-E-6-A33-O0-Kk-RRMm-HVNIYAu-Diu0ea-Of-y-RQ-usqp-CAU.jpg"
                    }
                  />
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col justify-center pl-2 space-y-2 ">
                    <h2 className="card-title">{product.name}</h2>
                    <p>Brand: {product.brand}</p>
                    <p className="text-sm">Look:{product.description}</p>

                    <p className="">price: {product.price}$</p> <span>rating: {product.rating}*</span>
                  </div>
                  <div className=" card-body">
                    <div className="btn-group gap-2 btn-group-vertical">
                    <p className="bg-secondary text-white p-2 rounded-full w-fit">{product.type}</p>
                    <Link to={`/details/${product._id}`}>
                    <button className="btn btn-active">Details</button>
                    </Link>
                      <Link
                        className="btn btn-accent"
                        to={`/updatecoffee/${product._id}`}>
                        <button className="uppercase">edit</button>
                      </Link>
                      {/* <button
                        className="btn btn-error"
                        onClick={() => handleDel(_id)}>
                        delete
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default BrandProduct;
{/* <div className="card card-side justify-center items-center lg:flex-row flex-col shadow-xl bg-orange-600 bg-opacity-10 p-2 ">
  <div className="lg:w-2/5 ">
    <img
      className="w-full h-[200px] "
      src={
        photo
          ? photo
          : "https://i.ibb.co/WtR37VL/images-q-tbn-ANd9-Gc-S2b-E-6-A33-O0-Kk-RRMm-HVNIYAu-Diu0ea-Of-y-RQ-usqp-CAU.jpg"
      }
    />
  </div>
  <div className="flex flex-row">
    <div className="flex flex-col justify-center pl-2 space-y-2 ">
      <h2 className="card-title">{name}</h2>
      <p>Brand: {brand}</p>
      <p className="text-sm">{description}</p>
      <p className="">{type}</p>
      <p className="">{price}</p> <span>rating: {rating}</span>
    </div>
    <div className=" card-body">
      <div className="btn-group gap-2 btn-group-vertical">
        <button className="btn btn-active">view</button>
        <Link className="btn btn-accent" to={`/updatecoffee/${_id}`}>
          <button className="uppercase">edit</button>
        </Link>
        <button className="btn btn-error" onClick={() => handleDel(_id)}>
          delete
        </button>
      </div>
    </div>
  </div>
</div>; */}
