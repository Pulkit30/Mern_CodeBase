const divEle = document.querySelector(".card-container");

function getDetails(id) {
  //   const request = fetch(`https://dummyjson.com/users/${id}`);
  //   //console.log(request);

  //   const response = request.then((response) => {
  //     return response.json();
  //   });

  //   response.then((user) => console.log(user));

  // fetch(`https://mmyjson.com/usrs/${id}`)
  //   .then((response) => {
  //     console.log("Promise fulfilled");
  //     if (!response.ok) {
  //       throw new Error("Id does not match any data");
  //     }
  //     return response.json();
  //   })
  //   .catch((error) => {
  //     console.log(error, "First Error match");
  //   })
  //   .then((user) => console.log(user))
  //   .catch((err) => {
  //     console.error(err, "Second Error match");
  //   });
  fetch(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      console.log("First Promise fulfilled");
      if (!response.ok) {
        throw new Error("Id does not match any data");
      }
      return response.json();
    })
    .then((user) => console.log(user))
    .catch((err) => {
      console.error(err, "Error");
    });
}

getDetails(1);
