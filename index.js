const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  //This is a variable called titleCased where it has been assigned an arrow function.
  return tutorials.map(function (tutorial) {
    //Here, I call the .map mehod to the tutorials variable. It iterates over every tutorial and executes a function that has been specified for it.
    return tutorial //Gets to each tutorial
      .split(" ") //This splits every tutorial of the array of words
      .map(function (word) {
        //From splitting, I call another .map method to target every word.
        return word.charAt(0).toUpperCase() + word.slice(1); //This makes every first letter of the word to be in Uppercase then .slice(1) gets the rest of the word
      })
      .join(" "); //This joins back the onnce separated words
  });
};
