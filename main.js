// Program Title
//Variables
let word = prompt("Enter one word between 4 and 11 letters. (Don't let the other player see!)");
let wordLength = word.length;
let wordLengthEl = document.getElementById("letters");
let letterGuessed = document.getElementById("letterGuess");

//event listeners 
document.getElementById("btn").addEventListener("click", () => {
    wordLengthDefine();
    setUp();
});

// Board Set Up
function setUp() {
    document.getElementById("setUp").innerHTML = `  <img src="img/stand0.png" alt=""> <p> ${wordLength} </p>
    <p>Guess a letter: <input type="text" name="" id="letterGuess"></p>
    <button id="guess" type="submit">Guess</button>`;
    document.getElementById("beginGameBtn").innerHTML = "";
}
function wordLengthDefine() {
    if (wordLength <= 3) {
        alert("Your word is too short. Please refresh and try again");
    } else if (wordLength >= 12) {
        alert("Your word is too long. Please refresh and try again");
    } else if ( wordLength === 4) {
        wordLength = "____";
    } else if ( wordLength === 5) {
        wordLength = "_____";
    } else if ( wordLength === 6) {
        wordLength = "______";
    } else if ( wordLength === 7) {
        wordLength = "_______";
    } else if ( wordLength === 8) {
        wordLength = "________";
    } else if ( wordLength === 9) {
        wordLength = "_________";
    } else if ( wordLength === 10) {
        wordLength = "__________";
    } else if ( wordLength === 11) {
        wordLength = "___________";
    } else {
        alert("Something went wrong. Refresh and try again")
    }
}
