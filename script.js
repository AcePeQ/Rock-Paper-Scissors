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

const computerChoice = getComputerChoice();
console.log(computerChoice);
