import React from "react";

const Message = () => {
  return (
    <div className=" py-16 my-16">
      <div className="w-9/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          We Respect your Valuable <br /> Feedback
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name "
            className="px-2 py-3 w-full bg-gray-100 rounded-md "
          />
          <input
            type="text"
            placeholder="Last Name "
            className="px-2 py-3 w-full bg-gray-100 rounded-md "
          />
          <input
            type="email"
            placeholder="Email"
            className="px-2 py-3 w-full bg-gray-100 rounded-md "
          />
          <input
            type="text"
            placeholder="Phone Number "
            className="px-2 py-3 w-full bg-gray-100 rounded-md "
          />
        </div>

        <textarea
          className="textarea  w-full mt-4 bg-gray-100 rounded-md"
          placeholder="Your Message"
        ></textarea>
        <button className=" bg-pink-500 px-2 py-3 text-bold text-white rounded-md  w-full mt-4">
          Send FeedBack
        </button>
      </div>
    </div>
  );
};

export default Message;
