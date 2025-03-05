//Do not alter anything else given in the starter code

function main(tempF) {
  let result;
  tempc = (5 / 9) * (tempF - 32);
  if (tempc >= 37) {
    result = "You have a fever! Your temperature is " + tempc.toFixed(1) + "°C";
  } else {
    result =
      "You have no fever! Your temperature is " + tempc.toFixed(1) + "°C";
  }
  // Step 1: Convert the temperature from Fahrenheit to Celsius.

  // Step 2: Store the converted temperature in a new variable.

  // Step 3: Check if the rounded temperature is 37°C or higher with the help of if and else condition
  // Use the toFixed() method to format converted temperature in celcius to one decimal place.

  return result;
}
console.log(main(prompt("Enter the number")));
