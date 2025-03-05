function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
  let answer;
  i = 1;
  while (i <= numberOfYears) {
    answer = principalAmount * annualInterestRate;
    principalAmount = answer + principalAmount;
    i++;
  }
  // Initialize the answer variable with the principal amount

  // create and initialize a year counter to 1

  // Use a while loop to calculate the total amount over the specified number of years

  // Return the final amount after all years
  return principalAmount;
}
console.log(compoundInterest(500, 0.08, 5));
