// Hangman by Kaydence Riehl
// Replace at
String.prototype.replaceAt = function (index, char) {
  let a = this.split("");
  a[index] = char;
  return a.join("");
};
//Variables & Constants
const wordList = [
  "shark",
  "lynx",
  "birds",
  "sleep",
  "house",
  "princess",
  "determined",
  "mother",
  "friend",
  "swimming",
  "skating",
  "sports",
  "family",
  "spaceship",
  "computer",
  "luxury",
  "ship",
  "words",
];
const wordSelection = Math.floor(Math.random() * wordList.length);
const word = wordList[wordSelection];
let wordLength = word.length;
let wordLengthEl = document.getElementById("wordlength");
let incorrectGuesses = 0;
let gameBegin = "false";

//event listeners
document.getElementById("btn").addEventListener("click", setUp);
document.getElementById("guess").addEventListener("click", letterGuessing);
// Board Set Up

function setUp() {
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
  wordLengthEl.innerHTML = wordLength;
  document.getElementById("beginGameBtn").innerHTML = "";
  gameBegin = "true";
}

// Letter Guessing
function letterGuessing() {
  let letterGuessed = document
    .getElementById("letterGuess")
    .value.toLowerCase();
  let letterPosition = +word.indexOf(letterGuessed);
  let letterPosition2 = +word.indexOf(letterGuessed, letterPosition + 1);
  let letterPosition3 = +word.indexOf(letterGuessed, letterPosition2 + 1);
  let letterPosition4 = +word.indexOf(letterGuessed, letterPosition3 + 1);
  let numberOfOccurences = word.split(letterGuessed).length - 1;
  document.getElementById("letterGuess").value = "";

  if (gameBegin !== "true") {
    alert("Please click 'Begin Game'");
  } else if (letterGuessed.length !== 1) {
    alert("Please enter a 1 letter guess.");
  } else if (numberOfOccurences === 1) {
    wordLength = wordLength.replaceAt(letterPosition, letterGuessed);
    wordLengthEl.innerHTML = wordLength;
  } else if (numberOfOccurences === 2) {
    wordLength = wordLength.replaceAt(letterPosition, letterGuessed);
    wordLengthEl.innerHTML = wordLength;

    wordLength = wordLength.replaceAt(letterPosition2, letterGuessed);
    wordLengthEl.innerHTML = wordLength;
  } else if (numberOfOccurences === 3) {
    wordLength = wordLength.replaceAt(letterPosition, letterGuessed);
    wordLengthEl.innerHTML = wordLength;

    wordLength = wordLength.replaceAt(letterPosition2, letterGuessed);
    wordLengthEl.innerHTML = wordLength;

    wordLength = wordLength.replaceAt(letterPosition3, letterGuessed);
    wordLengthEl.innerHTML = wordLength;
  } else if (numberOfOccurences === 4) {
    wordLength = wordLength.replaceAt(letterPosition, letterGuessed);
    wordLengthEl.innerHTML = wordLength;

    wordLength = wordLength.replaceAt(letterPosition2, letterGuessed);
    wordLengthEl.innerHTML = wordLength;

    wordLength = wordLength.replaceAt(letterPosition3, letterGuessed);
    wordLengthEl.innerHTML = wordLength;

    wordLength = wordLength.replaceAt(letterPosition4, letterGuessed);
    wordLengthEl.innerHTML = wordLength;
  } else if (numberOfOccurences === 0) {
    ++incorrectGuesses;
    document.getElementById(
      "img"
    ).innerHTML = `<img src="img/stand${incorrectGuesses}.png" alt="" />`;
    document.getElementById("lettersGuessedEl").innerHTML =
      document.getElementById("lettersGuessedEl").innerHTML +
      letterGuessed +
      " ";
  }

  if (wordLengthEl.innerHTML === word) {
    document.getElementById("winLose").innerHTML = "You Win!";
  } else if (incorrectGuesses === 10) {
    document.getElementById("winLose").innerHTML = "You Lose!";
    wordLengthEl.innerHTML = `The word was ${word}!`;
  }
}
