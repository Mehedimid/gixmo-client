import React, { useEffect, useState } from "react";

function Services(props) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
  
      <h1 className="text-2xl md:text-4xl mx-auto w-10/12 my-10 font-bold text-red-400 max-w-fit bg-red-500 rounded-xl  py-2 px-5 bg-opacity-10">
        SERVICES
      </h1>
      <div className="md:flex w-10/12 mx-auto gap-3 border">
        {services.map((service) => (
          <div key={service.id} className="">
            <div className="card  bg-red-100  shadow-xl">
              <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="h-[150px]" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.service_name}</h2>
                <p>{service.description.slice(0, 145)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
