import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../CustomHook/useAdmin";

const MakeAdmin = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const handleAdminService = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
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
          email,
          content,
          image: data.data.display_url,
        };

        fetch(`http://localhost:5000/adminrequest`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(service),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Request Done");
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
    <div className="bg-pink-100 p-5">
      <form onSubmit={handleAdminService}>
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          className="input  w-full mb-3"
        />
        <input type="file" name="image" className="file-input w-full mb-3 " />
        <textarea
          name="servicecontent"
          className="textarea w-full"
          placeholder="Describe Yourself"
        ></textarea>
        <button className=" bg-pink-500 px-2 py-3 text-bold text-white w-full mt-3">
          Submit For Admin
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
