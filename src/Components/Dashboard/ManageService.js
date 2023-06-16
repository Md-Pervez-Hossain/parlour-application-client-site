import React, { useEffect, useState } from "react";

const ManageService = () => {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/adminrequest")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, [admin]);
  const handleAdmin = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdmin(data);
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  <img src={user?.image} alt="" className="h-10 rounded-full" />
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleAdmin(user?._id)}
                      className="bg-pink-600 font-bold p-2 text-white"
                    >
                      Make admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
