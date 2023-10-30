import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useLoaderData, useParams } from "react-router-dom";

function BrandProduct() {
  const loadedProducts = useLoaderData()
  const [products, setProducts] = useState(loadedProducts)


  const {brand} = useParams()

  console.log(products)




  return (
    <>
      <div className="bg-black bg-opacity-90">
        <Navbar></Navbar>
      </div>

      {/* ======= sliders ====== */}
      <div className="mb-20">
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
      <h1 className="text-2xl md:text-4xl my-10 font-bold text-red-400 max-w-fit bg-red-500 rounded-xl mx-auto py-2 px-5 bg-opacity-10">
        Our All Available Products
      </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {
          products.length ?
            products.map((product) => (
              <div key={product._id} className="card card-side justify-center items-center lg:flex-row flex-col shadow-xl bg-orange-600 bg-opacity-10 p-2 ">
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
                    <p>Brand: <span className="font-bold"> {product.brand}</span></p>
                    <p className="text-sm">Description:{product.description}</p>

                    <p className="">price: {product.price}$</p> <span>rating: {product.rating}*</span>
                  </div>
                  <div className=" card-body">
                    <div className="btn-group gap-2 btn-group-vertical">
                    <p className="bg-secondary text-white p-2 rounded-full w-fit">{product.type}</p>
                    <Link to={`/details/${product._id}`}>
                    <button className="btn btn-primary">Details</button>
                    </Link>
                      <Link
                        className="btn btn-accent"
                        to={`/updateproducts/${product._id}`}>
                        <button className="uppercase">Update</button>
                      </Link>
     
                    </div>
                  </div>
                </div>
              </div>
            )) : <div className="my-24 mx-auto w-10/12 text-red-500">
            <h1 className="text-center font-bold text-4xl">No product available</h1>
          </div>}
        </div>
      </section>
    </>
  );
}

export default BrandProduct;

