import React from "react";

const Review = () => {
  return (
    <div className="bg-pink-100 p-5">
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="input  w-full mb-3"
        />
        <input
          type="text"
          placeholder="Company name"
          className="input  w-full mb-3"
        />

        <textarea className="textarea w-full" placeholder="Review"></textarea>
        <button className=" bg-pink-500 px-2 py-3 text-bold text-white w-full mt-3">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Review;
