"use strict";

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  const userChoice = prompt(
    "What's your choice? Choice between: paper, rock, scissors",
    "paper"
  ).toLowerCase();

  if (!userChoice)
    return window.alert("You need to choice between paper, rock, scissors");

  return userChoice;
}

function playRound(userChoice, computerChoice) {
  switch (userChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        console.log("You won! Rock beats Scissors");
        humanScore++;
      } else if (computerChoice === "paper") {
        console.log("You lost! Paper beats Rock");
        computerScore++;
      }
      break;

    case "paper":
      if (computerChoice === "rock") {
        console.log("You won! Paper beats Rock");
        humanScore++;
      } else if (computerChoice === "scissors") {
        console.log("You lost! Scissors beats Paper");
        computerScore++;
      }
      break;

    case "scissors":
      if (computerChoice === "paper") {
        console.log("You won! Scissors beats paper");
        humanScore++;
      } else if (computerChoice === "rock") {
        console.log("You lost! Rock beats Scissors");
        computerScore++;
      }
      break;
  }
}

const computerChoice = getComputerChoice();
const userChoice = getHumanChoice();

playRound(userChoice, computerChoice);
