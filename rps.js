const buttons = document.querySelectorAll('button');

buttons.forEach((button) => 
  addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    let winner = pickWinner(button.textContent,getComputerChoice());
    console.log(button.textContent);
    console.log(winner);
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


function writeWinner(roundWinner) {

  
  if (roundWinner === 'player') {
    playerScore++;

  } else if (roundWinner === 'computer') {
    computerScore++;
  }
  // Log winners of each round and scores
  if (roundWinner === 'player') {
    console.log(`${playerChoice} beats ${computerChoice}. The player is the winner of the round!!`);
  } else if (roundWinner === 'computer') {
    console.log(`${computerChoice} beats ${playerChoice}. The computer is the winner of the round!!`);
  } else {
    console.log('Aw shucks!! It seems like it\'s a tie!!');
  }
  console.log(`Current scores are: Player - ${playerScore}, Computer - ${computerScore}`)
  // Reset roundWinner to null
  roundWinner = null;
  // Decide who the winner is
  if (playerScore === 3) {
    finalWinner = 'Player';
  } else {
    finalWinner = 'Computer';
  }

  return finalWinner;
}