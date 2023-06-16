import React from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image = form.image.files[0];
    const content = form.servicecontent.value;
    const formData = new FormData();
    formData.append("image", image);

    fetch(
      "https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const service = {
          title,
          content,
          image: data.data.display_url,
        };

        fetch("http://localhost:5000/addservice", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(service),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("service added");
            form.reset();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-pink-100  p-5">
      <form onSubmit={handleAddService}>
        <label htmlFor="" className="text-xl font-bold mb-3">
          Service Title
        </label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Service title"
          className="input  w-full mb-3"
        />
        <input type="file" name="image" className="file-input w-full mb-3 " />
        <textarea
          name="servicecontent"
          className="textarea w-full"
          placeholder="Service Content"
        ></textarea>
        <button className=" bg-pink-500 px-2 py-3 text-bold text-white w-full mt-3">
          Get an Appoinment
        </button>
      </form>
    </div>
  );
};

export default AddService;
