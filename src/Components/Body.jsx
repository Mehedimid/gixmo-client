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
              src="https://st2.depositphotos.com/1265075/6788/i/450/depositphotos_67883405-stock-photo-quiz-sign-tags.jpg"
              className="max-w-sm rounded-lg shadow-2xl w-full min-h-[150px] lg:h-[500px] object-cove"
            />
            <div>
              <h1 className="text-2xl md:text-4xl text-red-500 font-bold text-center">"Electrify Your Knowledge: <small className="text-red-400">Join the Ultimate Electronics Quiz and Win Big!</small> "</h1>
              <p className="py-6 max-w-10/12 mx-auto text-slate-700">
              "Welcome to the Ultimate Electronics Quiz Challenge at GIZMOGENIX, where your tech knowledge could win you incredible prizes! Dive into the world of electronics, from iconic brands like Apple, Google, and Samsung to cutting-edge AI and emerging tech trends. Put your skills to the test, learn intriguing trivia, and compete with tech enthusiasts worldwide. Sign up, tackle thought-provoking questions, and race against the clock for your chance to win gift cards, the latest gadgets, and exclusive electronics discounts. Stay at the forefront of technology, have fun, and showcase your expertise – join the Ultimate Electronics Quiz today!"
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
