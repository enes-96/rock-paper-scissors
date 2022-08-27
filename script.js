const choices = ["rock", "paper", "scissors"];

function game() {
  // play the game
  // play 5 rounds
  //console based
}

function playround() {
  const playerSelection = playerchoice();
  const computerSelection = computerChoice();
}
function playerchoice() {
  // get input from player
}
function computerChoice() {
  // get random input form computer
  return choices[Math.floor(Math.random() * choices.length)];
}
