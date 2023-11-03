import { useEffect, useState } from "react";
import { Link, Navigate, Route, Router } from "react-router-dom";


function BrandsSection(props) {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);


 

  return (

<>
      <h1 className="text-2xl mb-6  md:text-4xl  font-bold text-red-400 max-w-fit pt-10 rounded-xl mx-auto py-2 px-5 bg-opacity-10">
        Our All Popular Brands
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 w-10/12  mx-auto ">
        {brands.length
          ? brands.map((brand) => (
              <Link
               to={`/brandproducts/${brand.brand_name.toLowerCase()}`}
              // to='/brandproducts'
                key={brand.id}
                className="shadow-2xl  rounded shadow-slate-600">
                <div className="card-body bg-red-100  p-2  ">
                  <h2 className="card-title dark:text-black text-3xl">{brand.brand_name}</h2>
                </div>
                <div className="card dark:bg-white card-compact h-[200px] ">
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
