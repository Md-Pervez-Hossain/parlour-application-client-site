import React from "react";

import skinImg from "../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const Skin = () => {
  return (
    <div>
      <div className=" bg-pink-100 py-16">
        <div className="hero ">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <img src={skinImg} className="w-1/2 rounded-lg shadow-2xl" alt="" />
            <div className="w-1/2">
              <h1 className="text-7xl font-bold">
                Let us handle your screen Professionally.
              </h1>
              <p className="py-6">
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general ipsum.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum
              </p>
              <button className=" bg-pink-500 px-2 py-3 text-bold text-white ">
                Get an Appoinment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skin;
