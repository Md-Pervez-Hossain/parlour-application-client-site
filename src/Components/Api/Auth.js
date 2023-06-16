export const setUser = (user) => {
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: user?.photoURL,
  };
  console.log(currentUser);
  fetch(`http://localhost:5000/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
