import React from "react";
import BrandsSection from "./BrandsSection";
import Services from "./Services";

function Body(props) {
  return (
    <div className="md:mt-32 space-y-32 md:space-y-44 ">
      <div>
        <BrandsSection></BrandsSection>
      </div>

      <div>
        <Services></Services>
      </div>

      <section>
        <div className="hero min-h-screen bg-red-50 shadow-2xl w-10/12 mx-auto">
          <div className="hero-content w-10/12 flex-col lg:flex-row">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7s_rDf227FYPX8CA-8lhGc05QqbsiIgfSZA&usqp=CAU"
              className="max-w-sm rounded-lg shadow-2xl w-full min-h-[300px] lg:h-[500px] object-cover"
            />
            <div>
              <h1 className="text-4xl text-red-500 font-bold">"Electrify Your Knowledge: <small>Join the Ultimate Electronics Quiz and Win Big!</small> "</h1>
              <p className="py-6 max-w-10/12 mx-auto">
              "Welcome to the Ultimate Electronics Quiz Challenge at [Your Website Name], where your tech knowledge could win you incredible prizes! Dive into the world of electronics, from iconic brands like Apple, Google, and Samsung to cutting-edge AI and emerging tech trends. Put your skills to the test, learn intriguing trivia, and compete with tech enthusiasts worldwide. Sign up, tackle thought-provoking questions, and race against the clock for your chance to win gift cards, the latest gadgets, and exclusive electronics discounts. Stay at the forefront of technology, have fun, and showcase your expertise – join the Ultimate Electronics Quiz today!"
              </p>
              <button className="btn btn-error">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
