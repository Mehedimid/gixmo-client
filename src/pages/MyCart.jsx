import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function MyCart(props) {
  const loadedCards = useLoaderData();
  const [cards, setcards] = useState(loadedCards);

  const handleDel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(`https://gizmo-genix-server-u01g09b61-mehedis-projects-aba2a00e.vercel.app/cart/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remain = cards.filter((card) => card._id !== id);
            setcards(remain);
            console.log("deleted");
          }
        });
    });
  };

  return (
    <>
      <div className="bg-black bg-opacity-90">
        <Navbar></Navbar>
      </div>

      <div className="my-24 mx-auto w-10/12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.length ? 
          cards?.map((card) => (
            <div
              key={card._id}
              className="card card-side justify-center items-center lg:flex-row flex-col shadow-xl bg-orange-600 bg-opacity-10 p-2 ">
              <div className="lg:w-2/5 ">
                <img
                  className="min-w-full h-[200px] "
                  src={
                    card.photo
                      ? card.photo
                      : "https://i.ibb.co/WtR37VL/images-q-tbn-ANd9-Gc-S2b-E-6-A33-O0-Kk-RRMm-HVNIYAu-Diu0ea-Of-y-RQ-usqp-CAU.jpg"
                  }
                />
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col justify-center pl-2 space-y-2 ">
                  <h2 className="card-title">{card.name}</h2>
                  <p>Brand: {card.brand}</p>
                  <p className="text-sm">Description:{card.description}</p>
                  <p className="">price: {card.price}$</p>{" "}
                  <span>rating: {card.rating}*</span>
                </div>
                <div className=" card-body">
                  <div className="btn-group gap-2 btn-group-vertical">
                    <p className="bg-secondary text-white p-2 rounded-full w-fit">
                      {card.type}
                    </p>

                    <button
                      className="btn btn-error"
                      onClick={() => handleDel(card._id)}>
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )) : <div className="my-24 mx-auto w-10/12 text-red-500">
            <h1 className="text-center font-bold text-4xl">No product addeded</h1>
          </div> }
      </div>
    </>
  );
}

export default MyCart;
