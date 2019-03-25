let playerScore = 0;
let computerScore = 0;
let gameCount = 0;
let result;

const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    computerPick = choices[Math.floor(Math.random() * 3)].toLowerCase();
    return computerPick;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = "Computer wins, Paper beats Rock!"
    computerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "Player wins, Rock beats Scissors!";
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "Player wins, Paper beats Rock!";
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "Computer wins, Scissors beats Paper!";
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "Computer wins, Rock beats Scissors!";
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "Player wins, Scissors beats Paper!";
    playerScore++;
  } else if (playerSelection === computerSelection) {
    result = "Tie game!";
  } else {
    result = 'Error!, learn how to spell!';
  }
  return result;
}

function game() {  
  if (gameCount < 5) {
    const playerSelection = prompt('Rock Paper or Scissors?').toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    gameCount++;
    game();
  } else {
    if (playerScore > computerScore) {
      console.log(`GAME OVER, Player wins with ${playerScore} points!`);
    } else if (computerScore > playerScore) {
      console.log(`GAME OVER, Computer wins with ${computerScore} points!`);
    } else {
      console.log('ROUND OVER, TIE!');
    }
  }
}

game();  

