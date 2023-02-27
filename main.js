// Program Title
// Replace at
String.prototype.replaceAt = function (index, char) {
  let a = this.split("");
  a[index] = char;
  return a.join("");
};
//Variables
let word = prompt(
  "Enter one word between 4 and 11 letters. (Don't let the other player see!)"
).toLowerCase();
let wordLength = word.length;
let wordLengthEl = document.getElementById("wordLength");
let incorrectGuesses = 0;

//event listeners
document.getElementById("btn").addEventListener("click", () => {
  wordLengthDefine();
  setUp();
});
document.getElementById("guess").addEventListener("click", letterGuessing);
// Board Set Up

function wordLengthDefine() {
  if (wordLength <= 3) {
    alert("Your word is too short. Please refresh and try again");
  } else if (wordLength >= 12) {
    alert("Your word is too long. Please refresh and try again");
  } else if (wordLength === 4) {
    wordLength = "____";
  } else if (wordLength === 5) {
    wordLength = "_____";
  } else if (wordLength === 6) {
    wordLength = "______";
  } else if (wordLength === 7) {
    wordLength = "_______";
  } else if (wordLength === 8) {
    wordLength = "________";
  } else if (wordLength === 9) {
    wordLength = "_________";
  } else if (wordLength === 10) {
    wordLength = "__________";
  } else if (wordLength === 11) {
    wordLength = "___________";
  } else {
    alert("Something went wrong. Refresh and try again");
  }
}
function setUp() {
  document.getElementById("wordLength").innerHTML = wordLength;
  document.getElementById("beginGameBtn").innerHTML = "";
}

// Letter Guessing
function letterGuessing() {
  let letterGuessed = document
    .getElementById("letterGuess")
    .value.toLowerCase();
  let letterPosition = +word.indexOf(letterGuessed);
  let numberOfOccurences = word.split(letterGuessed).length - 1;
  console.log(numberOfOccurences);

  if (numberOfOccurences === 1) {
    wordLength = wordLength.replaceAt(letterPosition, letterGuessed);
    document.getElementById("wordLength").innerHTML = wordLength;
  } else if (numberOfOccurences > 1) {
    wordLength = wordLength.replaceAt(letterPosition, letterGuessed);
    document.getElementById("wordLength").innerHTML = wordLength;
  } else if (numberOfOccurences === 0) {
    ++incorrectGuesses;
    console.log(incorrectGuesses);
    document.getElementById(
      "img"
    ).innerHTML = `<img src="img/stand${incorrectGuesses}.png" alt="" />`;
  }
}
