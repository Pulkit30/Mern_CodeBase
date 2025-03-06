function main() {
  const questions = [
    "Question1",
    "Question2",
    "Question3",
    "Question4",
    "Question5",
  ];
  function shuffle(arr) {
    return function () {
      let result = [...array]; // Create a copy of the array
      for (let i = result.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [result[i], result[j]] = [result[j], result[i]]; // Swap elements
      }
      return result;
    };
  }
  return shuffle;
}
print(main())
