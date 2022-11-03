// function to generate AI RPS choice
function getComputerChoice() {
  let x = Math.floor(Math.random() * 3 + 1);
  if (x === 1) {
    return "rock";
  } else if (x === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // your code here!

  // convert player input to lower case
  playerSelection = playerSelection.toLowerCase();

  // rock paper scissors logic (rock > scissors > paper > rock)
  if (playerSelection === computerSelection) {
    return "It is a draw";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Rock beats Scissors, Player Wins!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Scissors beats Paper, Player Wins!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Paper beats Rock, Player Wins!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "Rock beats Scissors, Computer Wins!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "Scissors beats Paper, Computer Wins!";
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return "Paper beats Rock, Computer Wins!";
  }
}

// function to play 5 rounds of RPS
function game() {
  let i;
  let playerScore = 0;
  let computerScore = 0;
  let result;

  for (i = 1; i <= 5; i++) {
    // your code here!
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    // checking for who won the round and keeping track of score
    if (result.includes("Computer")) {
      computerScore++;
      console.log(
        `Round ${i}, Player selected ${playerSelection}, Computer Selected ${computerSelection}, Computer Wins Round`
      );
    } else if (result.includes("Player")) {
      playerScore++;
      console.log(
        `Round ${i}, Player selected ${playerSelection}, Computer Selected ${computerSelection}, Player Wins Round`
      );
    } else {
      console.log(
        `Round ${i}, Player selected ${playerSelection}, Computer Selected ${computerSelection}, It is a Draw`
      );
    }
  }

  // checking for who won the game
  if (playerScore > computerScore) {
    console.log(`In a game of ${i - 1} rounds, Player Wins`);
  } else if (playerScore < computerScore) {
    console.log(`In a game of ${i - 1} rounds, Computer Wins`);
  } else {
    console.log(`In a game of ${i - 1} rounds, It is a Draw`);
  }
}

// MAIN LOOP

const gameStartDiv = document.querySelector(".game-start");

function startGame(e) {
  gameStartDiv.removeEventListener("click", startGame);
  gameStartDiv.textContent = "Game Started";

  // variables
  let i = 0;
  let playerScore = 0;
  let computerScore = 0;
  let drawScore = 0;
  let result;

  // linking to the html imgs to get player input
  const imgs = document.querySelectorAll("img");

  // linking to html score display divs
  const playerScoreDiv = document.querySelector(".player-score-div");
  const computerScoreDiv = document.querySelector(".computer-score-div");
  const drawScoreDiv = document.querySelector(".draw-score-div");
  const roundsPlayedDiv = document.querySelector(".rounds-played-div");

  // function that is run every click
  function logDecision(e) {
    const playerSelection = this.classList.value;
    const computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    // keeping track of rounds
    i++;
    roundsPlayedDiv.innerText = i;

    // checking for winner
    if (i === 5) {
      if (playerScore > computerScore) {
        gameStartDiv.textContent = "Player Wins";
      } else if (playerScore < computerScore) {
        gameStartDiv.textContent = "Computer Wins";
      } else {
        gameStartDiv.textContent = "It is a Draw";
      }
    }

    // checking for who won the round and keeping track of score
    if (result.includes("Computer")) {
      computerScore++;
      computerScoreDiv.innerText = computerScore;
    } else if (result.includes("Player")) {
      playerScore++;
      playerScoreDiv.innerText = playerScore;
    } else {
      drawScore++;
      drawScoreDiv.innerText = drawScore;
    }
  }

  // adding an event listener to each img for player input
  imgs.forEach((img) =>
    img.addEventListener("click", logDecision, {
      capture: false,
    })
  );
}

// adding an event listener to the game start div
gameStartDiv.addEventListener("click", startGame);
