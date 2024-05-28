"use strict";

function getComputerChoice() {
  let computerChoice;
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
    default:
      break;
  }

  return computerChoice;
}

function getHumanChoice(btnTarget) {
  // const userChoice = prompt(
  //   "What's your choice? Choice between: paper, rock, scissors",
  //   "paper"
  // ).toLowerCase();
  // if (!userChoice)
  //   return window.alert("You need to choice between paper, rock, scissors");
  // if (
  //   userChoice !== "scissors" &&
  //   userChoice !== "paper" &&
  //   userChoice !== "rock"
  // )
  //   return window.alert("Wrong choice!");
  // return userChoice;
  return btnTarget.getAttribute("data-choice");
}

function playRound(userChoice, computerChoice) {
  switch (userChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        displayText.textContent = "You won! Rock beats Scissors";
        humanScore++;
      } else if (computerChoice === "paper") {
        displayText.textContent = "You lost! Paper beats Rock";
        computerScore++;
      } else if (computerChoice === "rock") {
        displayText.textContent = "Draw!";
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        displayText.textContent = "You won! Paper beats Rock";
        humanScore++;
      } else if (computerChoice === "scissors") {
        displayText.textContent = "You lost! Scissors beats Paper";
        computerScore++;
      } else if (computerChoice === "paper") {
        displayText.textContent = "Draw!";
      }
      break;

    case "scissors":
      if (computerChoice === "paper") {
        displayText.textContent = "You won! Scissors beats paper";
        humanScore++;
      } else if (computerChoice === "rock") {
        displayText.textContent = "You lost! Rock beats Scissors";
        computerScore++;
      } else if (computerChoice === "scissors") {
        displayText.textContent = "Draw!";
      }
      break;
  }
}

function playGame(humanChoice, computerChoice) {
  playRound(humanChoice, computerChoice);
  displayScore.textContent = `You: ${humanScore} Computer: ${computerScore}`;

  if (humanScore > computerScore && humanScore === 5) {
    displayText.textContent = `You won! ${humanScore}:${computerScore}`;
    humanScore = 0;
    computerScore = 0;
  } else if (humanScore < computerScore && computerScore === 5) {
    displayText.textContent = `You lost! ${computerScore}:${humanScore}`;
    humanScore = 0;
    computerScore = 0;
  } else if (
    humanScore === computerScore &&
    computerScore === 5 &&
    humanScore === 5
  ) {
    displayText.textContent = `It's a tie ${computerScore}:${humanScore}`;
    computerScore = 0;
    humanScore = 0;
  }
}

const btnsContainer = document.querySelector(".btns");
const displayText = document.querySelector(".displayText");
const displayScore = document.querySelector(".scoreText");

let humanScore = 0;
let computerScore = 0;

btnsContainer.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") === "btns") return;

  if (displayScore.classList.contains("hidden")) {
    displayScore.classList.remove("hidden");
  }

  const btnTarget = e.target;

  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice(btnTarget);

  playGame(humanChoice, computerChoice);
});
