import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

function Update() {
    const [loadedproduct, setProduct] = useState({})
    const {id}= useParams()
    console.log(loadedproduct.name)
    const navigate = useNavigate()


useEffect(()=>{
  fetch(`https://gizmo-genix-server-py9z1adgm-mehedis-projects-aba2a00e.vercel.app/products/${id}`)
  .then(res=>res.json())
  .then(data=>setProduct(data))
},[])
      
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const brand = form.brand.value
        const price = form.price.value
        const description = form.description.value
        const type = form.type.value
        const rating = form.rating.value
        const photo = form.photo.value
        const product = {name, brand, price, description, type, rating, photo}
        console.log(product)

        fetch(`https://gizmo-genix-server-py9z1adgm-mehedis-projects-aba2a00e.vercel.app/products/${id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.modifiedCount > 0) {
                Swal.fire({
                  title: "Success!",
                  text: "product Updated successfully!!!",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
              navigate('/')
            });
    }
  return (
    <>
      <div>
        <div className="bg-black bg-opacity-90">
          <Navbar></Navbar>
        </div>
        <div>
          <form
            onSubmit={handleUpdate}
            className="border w-9/12 mx-auto bg-neutral-700 shadow-xl bg-opacity-10 space-y-6 mt-12 md:px-16 py-5">
            <h1 className="text-3xl font-bold my-6 text-center text-red-500">
              Update Product
            </h1>
            {/* name and brand name  */}
            <div className=" md:flex gap-10 ">
              <div className="md:w-1/2">
                <h2 className="text-lg mb-2 text-slate-700">Name:</h2>
                <input
                  required
                  defaultValue={loadedproduct.name}
                  type="text"
                  placeholder=" Name"
                  name="name"
                  className="border p-2  w-full border-red-400 rounded"
                />
              </div>
              <div className="  md:w-1/2">
                <h2 className="text-lg mb-2 text-slate-700">Brand:</h2>
                <input
                  required
                  type="text"
                  placeholder="your Brand"
                  name="brand"
                  defaultValue={loadedproduct.brand}
                  className="border p-2  w-full border-red-400 rounded"
                />
              </div>
            </div>
            {/* type and price  */}
            <div className=" md:flex gap-10 ">
              <div className="md:w-1/2">
                <h2 className="text-lg mb-2 text-slate-700">Type:</h2>
                <input
                  required
                  type="text"
                  placeholder="Type"
                  name="type"
                  defaultValue={loadedproduct.type}
                  className="border p-2  w-full border-red-400 rounded"
                />
              </div>

              <div className="  md:w-1/2">
                <h2 className="text-lg mb-2 text-slate-700">price:</h2>
                <input
                  required
                  type="text"
                  placeholder="price"
                  name="price"
                  defaultValue={loadedproduct.price}
                  className="border p-2  w-full border-red-400 rounded"
                />
              </div>
            </div>
            {/* descrip and rating */}
            <div className=" md:flex gap-10 ">
              <div className="md:w-1/2">
                <h2 className="text-lg mb-2 text-slate-700">Description:</h2>
                <input
                  required
                  type="text"
                  placeholder="Type description"
                  name="description"
                  defaultValue={loadedproduct.description}
                  className="border p-2  w-full border-red-400 rounded"
                />
              </div>
              <div className="  md:w-1/2">
                <h2 className="text-lg mb-2 text-slate-700">Rating:</h2>
                <input
                  required
                  type="text"
                  placeholder="rating"
                  name="rating"
                  defaultValue={loadedproduct.rating}
                  className="border p-2  w-full border-red-400 rounded"
                />
              </div>
            </div>
            {/* photo url  */}
            <div className=" md:flex gap-10 ">
              <div className="w-full">
                <h2 className="text-lg mb-2 text-slate-700">Photo:</h2>
                <input
                  required
                  type="text"
                  placeholder="type photo url"
                  name="photo"
                  defaultValue={loadedproduct.photo}
                  className="border p-2  w-full border-red-400 rounded"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                value="Add Coffe"
                className="w-full text-white font-bold bg-red-500 p-2">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
