const buttons = document.querySelectorAll('.choice');
const winnerDiv = document.querySelector('.results');
const cpuChoiceText = document.querySelector('.results p');
const winnerParagraph = document.querySelector('.results p:nth-child(2)');
const scoreParagraph = document.querySelector('.scores');
const finalWinnerParagraph = document.querySelector('.winner');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => 
  button.addEventListener('click', () => {
    playerChoice = button.textContent;
    console.log(playerChoice);
    console.log(buttons);
    let cpuChoice = getComputerChoice();
    let winner = pickWinner(playerChoice, cpuChoice);
    writeWinner(winner, playerChoice, cpuChoice);
    addScore(winner);
    displayScore();
    finishGame();
}));

function getComputerChoice() {
  const RPS = ['rock','paper','scissors'];
  // Get a random number between 0 and 2 inclusive
  const randomSelection = Math.floor(Math.random()*3);
  return RPS.at(randomSelection);
}

function pickWinner(playerSelection, computerSelection) {
  let winner;
  playerSelection = playerSelection.toLowerCase();
  
  switch (playerSelection) {
    case 'rock':
      if (computerSelection === 'scissors') {
        winner = 'player';
        break;
      } else if (computerSelection === 'paper') {
        winner = 'computer';
        break;
      } else {
        winner = 'tie'
        break;
      }
    case 'paper':
      if (computerSelection === 'rock') {
        winner = 'player';
        break;
      } else if (computerSelection === 'scissors') {
        winner = 'computer';
        break;
      } else {
        winner = 'tie';
        break;
      }
    case 'scissors':
      if (computerSelection === 'paper') {
        winner = 'player';
        break;
      } else if (computerSelection === 'rock') {
        winner = 'computer';
        break;
      } else {
        winner = 'tie';
        break;
      }
  }
  return winner;
}


function writeWinner(roundWinner,playerChoice,computerChoice) {
  cpuChoiceText.textContent = 'Computer chose: ' + computerChoice;
  if (roundWinner === 'player') {
    winnerParagraph.textContent = `${playerChoice} beats ${computerChoice}. You're the winner of the round!!`;
  } else if (roundWinner === 'computer') {
    winnerParagraph.textContent = `${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.toLowerCase()}. The computer is the winner of the round!!`;
  } else {
    winnerParagraph.textContent = 'Aw shucks!! It seems like it\'s a tie!!';
  }
}

function addScore(winner) {
  if (winner === 'player') {
    playerScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

function displayScore() {
  if (playerScore || computerScore) {
    scoreParagraph.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  }
}

function finishGame() {
  let gameOver = false;
  if (playerScore >= 3) {
    finalWinnerParagraph.textContent = 'You win!! Congrats!!'
    gameOver = true;
  } else if (computerScore >= 3) {
    finalWinnerParagraph.textContent = 'The computer won, better luck next time!!';
    gameOver = true;
  }
  if (gameOver) {
    const buttonRestart = document.createElement('button');
    buttonRestart.textContent = 'Play Again?';
    buttons.forEach((button) => button.disabled = true);
    playerScore = 0;
    computerScore = 0;
    buttonRestart.addEventListener('click', () => {
      cpuChoiceText.textContent = '';
      winnerParagraph.textContent = 'Waiting for player to pick...';
      scoreParagraph.textContent = '';
      finalWinnerParagraph.textContent = '';
      buttonRestart.remove();
      buttons.forEach((button) => button.disabled = false);
    });
    winnerDiv.appendChild(buttonRestart);
  }
}