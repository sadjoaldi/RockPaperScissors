const btn = document.querySelectorAll(".game-btn");
const result = document.getElementById("result");
const score = document.getElementById("score");
const reset = document.getElementById("reset");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    result.textContent = `It's a tie! You both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  playGame();
}

function playGame() {
  score.textContent = `Final Score - You: ${humanScore}, Computer: ${computerScore}`;
  if (humanScore === 5) {
    result.textContent = "Congratulations! You won the game!";
    btn.forEach((button) => (button.disabled = true));
  } else if (computerScore === 5) {
    result.textContent = "Game Over! The computer won the game!";
    btn.forEach((button) => (button.disabled = true));
  }
}

btn.forEach((button) => {
  button.addEventListener("click", () =>
    playRound(button.id, getComputerChoice()),
  );
});

reset.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  result.textContent = "Game reset! Start playing again.";
  score.textContent = "";
  btn.forEach((button) => (button.disabled = false));
});
