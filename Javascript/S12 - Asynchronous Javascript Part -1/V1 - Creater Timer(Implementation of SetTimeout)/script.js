function timer() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(
      function () {
          console.log(i)
        //Write your code here...
      },i*1000);
    console.log("Hello ninjas!");
  }
}
timer();

// Do not edit the rest of the code
