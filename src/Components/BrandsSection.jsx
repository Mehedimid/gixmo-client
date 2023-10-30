import { useEffect, useState } from "react";
import { Link, Navigate, Route, Router } from "react-router-dom";
import BrandProduct from "./BrandProduct";

function BrandsSection(props) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  const handleSend = () => {
   return <BrandProduct brandName={brands.brand_name}></BrandProduct>
  }

  return (

<>
      <h1 className="text-2xl md:text-4xl my-10 font-bold text-red-400 max-w-fit bg-red-500 rounded-xl mx-auto py-2 px-5 bg-opacity-10">
        Our All Popular Brands
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 w-10/12  mx-auto ">
        {brands.length
          ? brands.map((brand) => (
              <Link
               to={{pathname:"/brandproduct"}}
              //  to="/brandproduct"
                key={brand.id}
                className="shadow-2xl  rounded shadow-slate-600">
                <div className="card-body bg-red-100 p-2  ">
                  <h2 className="card-title text-3xl">{brand.brand_name}</h2>
                </div>
                <div className="card card-compact h-[200px] ">
                  <figure>
                    <img
                      src={brand.brand_img}
                      className="w-full h-full"
                      alt="Shoes"
                    />
                  </figure>
                </div>


              </Link>
            ))
          : ""}
      </section>
    </>

  );
}

export default BrandsSection;
