// Hangman by Kaydence Riehl
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
let wordLengthEl = document.getElementById("wordLength");
let wordHint = "";
let wrongLetters = "";
let incorrectGuesses = 0;
let gameBegin = "false";

//event listeners
document.getElementById("btn").addEventListener("click", setUp);
document.getElementById("guess").addEventListener("click", letterGuessing);
// Board Set Up

function setUp() {
  checkWordLength(word);
  document.getElementById("beginGameBtn").innerHTML = "";
  gameBegin = "true";
}

// Letter Guessing
function letterGuessing() {
  let letterGuessed = document
    .getElementById("letterGuess")
    .value.toLowerCase();
  checkLetter(letterGuessed, word);
  document.getElementById("letterGuess").value = "";

  // Update Img
  document.getElementById(
    "img"
  ).innerHTML = `<img src="../img/stand${incorrectGuesses}.png">`;

  // Update Incorrect guesses
  document.getElementById("lettersGuessedEl").innerHTML = wrongLetters;

  if (wordLengthEl.innerHTML === word) {
    document.getElementById("winLose").innerHTML = "You Win!";
  } else if (incorrectGuesses === 10) {
    document.getElementById("winLose").innerHTML = "You Lose!";
    wordLengthEl.innerHTML = `The word was ${word}!`;
  }
}

// Replace at Fucntion
String.prototype.replaceAt = function (index, char) {
  let a = this.split("");
  a[index] = char;
  return a.join("");
};

// Helper Functions
function getRandomWord(array) {
  let randNum = Math.floor(Math.random() * array.length);
  return array[randNum];
}

function checkWordLength(word) {
  if (wordLength <= 3) {
    alert("Your word is too short. Please refresh and try again");
  } else if (wordLength >= 12) {
    alert("Your word is too long. Please refresh and try again");
  } else {
    for (let i = 0; i < word.length; i++) {
      wordHint += "_";
    }
  }
  wordLengthEl.innerHTML = wordHint;
}

function checkLetter(letterGuessed, word) {
  // Check if letter is already guessed
  for (let i = 0; i < wrongLetters.length; i++) {
    if (
      wrongLetters.charAt(i) === letterGuessed ||
      letterGuessed.length !== 1
    ) {
      return;
    }
  }

  // Check if word contains letter
  let containsLetter = false;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === letterGuessed) {
      wordHint = wordHint.replaceAt(i, letterGuessed);
      containsLetter = true;
    }
  }
  if (containsLetter === false) {
    ++incorrectGuesses;
    wrongLetters += `${letterGuessed} `;
  }
  wordLengthEl.innerHTML = wordHint;
}
