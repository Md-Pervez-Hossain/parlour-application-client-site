import React from "react";
import img1 from "../../assets/icons/Group 1372.png";
import img2 from "../../assets/icons/Group 1373.png";
import img3 from "../../assets/icons/Group 1374.png";

const Service = () => {
  return (
    <div className="md:w-9/12 mx-auto my-16">
      <h2 className="text-center my-16 text-7xl font-bold">
        Our Awesome <span className="text-pink-600">Services</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="card  ">
            <div className="card-body items-center text-center">
              <img src={img1} alt="" />
              <h2>Hair Color & Styleing</h2>
              <h5>Price $ 190</h5>
              <p>
                We craft stunning and amazing web UI, using a well drrafted UX
                to fit your product.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card ">
            <div className="card-body items-center text-center">
              <img src={img3} alt="" />
              <h2>Anti Age Face Treatment</h2>
              <h5>Price $ 90</h5>
              <p>
                Amazing flyers, social media posts and brand representations
                that would make your brand stand out.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card  ">
            <div className="card-body items-center text-center">
              <img src={img2} alt="" />
              <h2>Skin Care Treatment</h2>
              <h5>Price $ 150</h5>
              <p>
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
