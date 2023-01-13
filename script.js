"use const";
let userChoice;
const buttons = document.querySelectorAll(".btn");
const winnerOutput = document.querySelector("h1");
let userScore = 0;
let computerScore = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    userChoice = e.target.id;
    startGame();
  });
});

function startGame() {
  const choices = ["rock", "paper", "scissors"];
  const userChoiceOutput = document.getElementById("userchoice");
  const computerChoiceOutput = document.getElementById("computerchoice");
  let computerChoice = Math.floor(Math.random() * choices.length);
  computerChoice = choices[computerChoice];
  let resultChoices = userChoice + computerChoice;
  console.log(resultChoices, userChoice, computerChoice);
  switch (resultChoices) {
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      winnerOutput.textContent = "It's a draw";
      userChoiceOutput.textContent = userChoice;
      computerChoiceOutput.textContent = computerChoice;
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      computerScore++;
      winnerOutput.textContent = "Computer Won";
      userChoiceOutput.textContent = userChoice;
      computerChoiceOutput.textContent = computerChoice;
      document.getElementById("computerScore").textContent = computerScore;
      checkWinner();

      break;
    case "paperrock":
    case "scissorspaper":
    case "rockscissors":
      userScore++;
      winnerOutput.textContent = "You won";
      userChoiceOutput.textContent = userChoice;
      computerChoiceOutput.textContent = computerChoice;
      document.getElementById("userScore").textContent = userScore;
      checkWinner();

      break;
  }
}

function checkWinner() {
  if (userScore >= 5) {
    winnerOutput.textContent = "YOU WON THE GAME";
    winnerOutput.style.color = "red";
    winnerOutput.classList.add("transition");

    buttons.forEach((btn) => btn.classList.add("disable-click"));
  }
  if (computerScore >= 5) {
    winnerOutput.textContent = "YOU LOST THE GAME";
    winnerOutput.style.color = "red";
    winnerOutput.classList.add("transition");
    buttons.forEach((btn) => btn.classList.add("disable-click"));
  }
}
document.getElementById("newGameBtn").addEventListener("click", () => {
  window.location.reload();
});
