const buttons = document.querySelectorAll('button');
const winnerDiv = document.querySelector('.results');
const cpuChoiceText = document.querySelector('.results p');
const winnerParagraph = document.querySelector('.results p:nth-child(2)');

buttons.forEach((button) => 
  button.addEventListener('click', (e) => {
    playerChoice = button.textContent;
    console.log(playerChoice);
    console.log(buttons);
    let cpuChoice = getComputerChoice();
    let winner = pickWinner(playerChoice, cpuChoice);
    writeWinner(winner, playerChoice, cpuChoice);
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
    winnerParagraph.textContent = `${computerChoice} beats ${playerChoice}. The computer is the winner of the round!!`;
  } else {
    winnerParagraph.textContent = 'Aw shucks!! It seems like it\'s a tie!!';
  }
}