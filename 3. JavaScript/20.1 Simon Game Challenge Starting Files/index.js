let gamePattern = [];
let userPattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let gameStarted = false;

function main() {
  gameSetup();
  nextSequence();
}

function gameSetup() {
  gameStarted = true;
  gamePattern = [];
  userPattern = [];
}

function nextSequence() {
  // Generate a random color and add it to the game pattern
  let randomColor =
    buttonColors[Math.floor(Math.random() * buttonColors.length)];
  gamePattern.push(randomColor);
  console.log("Game Pattern:", gamePattern);
  $("#level-title").text("Level " + gamePattern.length);
  animateButton(randomColor);
}

function animateButton(color) {
  pressAnimation(color);
  soundAnimation(color);
}

function pressAnimation(color) {
  $(`.btn.${color}`).addClass("pressed");
  setTimeout(() => {
    $(`.btn.${color}`).removeClass("pressed");
  }, 100);
}

function soundAnimation(file) {
  let audio = new Audio(`sounds/${file}.mp3`);
  audio.play();
}

function checkAnswer() {
  let answerNumber = userPattern.length - 1;
  // Check if the user's choice matches the game pattern
  if (userPattern[answerNumber] === gamePattern[answerNumber]) {
    // Check if the user has completed the sequence
    if (userPattern.length === gamePattern.length) {
      userPattern = [];
      $("#level-title").text("Correct! Next Level...");
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    endGame();
  }
}

function correctSequence() {
  for (let i = 0; i < userPattern.length; i++) {
    if (userPattern[i] !== gamePattern[i]) {
      return false;
    }
  }
  return true;
}

function endGame() {
  $("#level-title").text("Wrong choice!");
  soundAnimation("wrong");
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 1000);
  $("#level-title").text("Game Over, Press Any Key to Restart");
  gameStarted = false;
}

$(document).on("keypress", () => {
  if (!gameStarted) {
    main();
  }
});

$(".btn").on("click", (event) => {
  let userChoice = event.target.id;
  userPattern.push(userChoice);
  animateButton(userChoice);
  checkAnswer();
});
