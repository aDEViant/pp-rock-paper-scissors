function getComputerChoice() {
  let computerResult = "";
  const randomNumber = Math.random();

  if (randomNumber > 0 && randomNumber <= 1 / 3) {
    computerResult = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerResult = "paper";
  } else {
    computerResult = "scissors";
  }

  return computerResult;
}

function getHumanChoice() {
  let humanResult = "";
  let response = prompt("1 - Rock, 2 - Paper, 3 - Scissors");

  if (response == 1) {
    humanResult = "rock";
  } else if (response == 2) {
    humanResult = "paper";
  } else {
    humanResult = "scissors";
  }

  return humanResult;
}

let humanScore = 0;
let computerScore = 0;
let playTimes = 5;

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("It's a draw!");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("You win! Paper beats Rock.");
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock beats Scissors.");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "paper") {
    console.log("It's a draw.");
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log("You win! Scisssors beats Paper");
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log("You win! Rock beats Scissors.");
    humanScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beats Paper.");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "scissors") {
    console.log("It's a draw!");
  }
}

function playGame() {
  let playTimes = 5;

  while (playTimes > 0) {
    playRound();
    playTimes--;
  }

  alert(
    `The final score is - \n Computer Score - ${computerScore} \n Your Score - ${humanScore}`
  );
}
