let playerScore = 0;
let computerScore = 0;
let gameCount = 0;
let result;

const choices = ['Rock', 'Paper', 'Scissors'];

const playerOptionsDiv = document.querySelector('.player-options');
const resultSpan = document.querySelector('#result');
const playerScoreSpan = document.querySelector('#player-score');
const computerScoreSpan = document.querySelector('#computer-score');
const roundNumberSpan = document.querySelector('#round-number');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const restartBtn = document.querySelector('#play-again');

function toggleHide() {
    playerOptionsDiv.classList.toggle('hide');
    restartBtn.classList.toggle('hide');
}

function computerPlay() {
    computerPick = choices[Math.floor(Math.random() * 3)].toLowerCase();
    return computerPick;
}

function displayInfo(result) {
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    roundNumberSpan.textContent = gameCount;
    resultSpan.textContent = result;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        result = "Paper beats Rock, Computer wins!"
        computerScore++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "Rock beats Scissors, Player wins!";
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = "Paper beats Rock, Player wins!";
        playerScore++;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "Scissors beats Paper, Computer wins!";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "Rock beats Scissors, Computer wins!";
        computerScore++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result = "Scissors beats Paper, Player wins!";
        playerScore++;
    } else if (playerSelection === computerSelection) {
        result = playerSelection + " == " + computerSelection;
    }   
    return result;
}

function game(FUCK) {
    if (gameCount < 5) {
        const playerSelection = FUCK;
        const computerSelection = computerPlay();
        const info = playRound(playerSelection, computerSelection);
        gameCount ++;
        displayInfo(info);
    } else {
        toggleHide();
    }
}

rockBtn.addEventListener('click', function() {
    game('rock');
});

paperBtn.addEventListener('click', function() {
    game('paper');
});

scissorsBtn.addEventListener('click', function() {
    game('scissors');
});

restartBtn.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    gameCount = 0;
    toggleHide();
    displayInfo();
});
