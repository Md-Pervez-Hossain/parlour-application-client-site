import React from "react";
import heroPic from "../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

const HeroBanner = () => {
  return (
    <div className=" bg-pink-100 py-16">
      <div className="hero ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img src={heroPic} className="w-1/2 rounded-lg shadow-2xl" alt="" />
          <div className="w-1/2">
            <h1 className="text-7xl font-bold">
              BEAUTY SALON <br /> FOR EVERY WOMEN
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <button className=" bg-pink-500 px-2 py-3 text-bold text-white ">
              Get an Appoinment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
