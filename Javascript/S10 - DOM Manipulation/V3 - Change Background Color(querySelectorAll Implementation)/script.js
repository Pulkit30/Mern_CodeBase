function changeBackgroundColor(selector) {
  //Implement your function here
  const elements = document.querySelectorAll(selector);
  console.log(elements);
  elements.forEach((element) => {
    element.style.backgroundColor = "yellow"; // Apply background color
  });
}

changeBackgroundColor("#my-id");
changeBackgroundColor("button");
changeBackgroundColor(".my-class");
