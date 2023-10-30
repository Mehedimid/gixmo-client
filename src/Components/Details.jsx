import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function Details(props) {
  const loadedProduct = useLoaderData();
  const { name, brand, price, description, type, rating, photo } =
    loadedProduct;

  return (
    <>
      <div className="bg-black bg-opacity-90">
        <Navbar></Navbar>
      </div>
      <div className="card bg-error md:p-3 bg-opacity-25 mx-auto md:w-8/12 my-24 lg:card-side shadow-xl">
        <figure className="md:w-1/2 ">
          <img src={photo} alt="Album" />
        </figure>
        <div className="card-body md:w-1/2">
          <h2 className="card-title text-3xl">{name}
          <div className="badge badge-secondary">{type}</div>
          </h2>
          <p className="text-xl font-semibold">Price: {price}$ </p>
          <p className="font-semibold text-xl">{brand} <small className="text-slate-600">rating: {rating}*</small></p>
          <p className="font-semibold">{description}</p>

          <p className="text-slate-700">Elevate your technology experience with Us. Our best quality electronic products combine cutting-edge innovation with unwavering reliability, all within sleek and stylish designs. We're dedicated to providing you with the very best in performance, durability, and customer satisfaction, so you can confidently embrace the future of technology. Choose us, and you're choosing a superior electronic experience that will enhance your life, both now and in the years to come.</p>
          <div className="card-actions ">
            <button className="btn btn-error">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
