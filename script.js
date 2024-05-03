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

function getHumanChoice() {
  const userChoice = prompt(
    "What's your choice? Choice between: paper, rock, scissors",
    "paper"
  ).toLowerCase();

  if (!userChoice)
    return window.alert("You need to choice between paper, rock, scissors");

  if (
    userChoice !== "scissors" &&
    userChoice !== "paper" &&
    userChoice !== "rock"
  )
    return window.alert("Wrong choice!");

  return userChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound() {
    const computerChoice = getComputerChoice();
    const userChoice = getHumanChoice();

    switch (userChoice) {
      case "rock":
        if (computerChoice === "scissors") {
          console.log("You won! Rock beats Scissors");
          humanScore++;
        } else if (computerChoice === "paper") {
          console.log("You lost! Paper beats Rock");
          computerScore++;
        } else if (computerChoice === "rock") {
          console.log("Draw!");
        }
        break;

      case "paper":
        if (computerChoice === "rock") {
          console.log("You won! Paper beats Rock");
          humanScore++;
        } else if (computerChoice === "scissors") {
          console.log("You lost! Scissors beats Paper");
          computerScore++;
        } else if (computerChoice === "paper") {
          console.log("Draw!");
        }
        break;

      case "scissors":
        if (computerChoice === "paper") {
          console.log("You won! Scissors beats paper");
          humanScore++;
        } else if (computerChoice === "rock") {
          console.log("You lost! Rock beats Scissors");
          computerScore++;
        } else if (computerChoice === "scissors") {
          console.log("Draw!");
        }
        break;
    }
  }

  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (humanScore > computerScore)
    return console.log(`You won! ${humanScore}:${computerScore}`);
  if (humanScore < computerScore)
    return console.log(`You lost! ${computerScore}:${humanScore}`);
  if (humanScore === computerScore) return console.log(`It's a tie`);
}

playGame();
