
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


function game() {

  let playerScore = 0;
  let computerScore = 0;

  let computerChoice;
  let playerChoice;

  let roundWinner;
  let finalWinner; 
  // Since it's best of 5, whoever gets to three first wins

    
  while (!roundWinner) {
   
    computerChoice = getComputerChoice();
    
    playerChoice = prompt('Choose: rock, paper or scissors?');
    
    roundWinner = pickWinner(playerChoice, computerChoice);
    
    if (!roundWinner) {
      console.log('That\'s not a valid option!');
    } else if (roundWinner === 'player') {
      playerScore++;

    } else if (roundWinner === 'computer') {
      computerScore++;
    }
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

console.log('And the winner is: ' + game() + '!!')