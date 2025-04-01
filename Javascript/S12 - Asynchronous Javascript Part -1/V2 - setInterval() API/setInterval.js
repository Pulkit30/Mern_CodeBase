const textElement = document.querySelector("#text");
let seconds = 0;

textElement.textContent = `${seconds}`;

const timer = setInterval(() => {
  seconds++;
  textElement.textContent = `${seconds}`;
  if (seconds >= 5) {
    clearInterval(timer); //here timer denotes timer id
  }
}, 1000);
