// Create function called getComputerChoice() that randomly chooses rock, paper or scissors and return the value.
  // Create an array with rock, paper and scissor in it.
  // Create a variable that generates a random number 0-2 and obtains the item in that position within the array

function getComputerChoice() {
  const RPS = ['rock','paper','scissors'];
  // Get a random number between 0 and 2 inclusive
  const randomSelection = Math.floor(Math.random()*3);
  return RPS.at(randomSelection);
}


// Create a function that takes two parameters, playerSelection and computerSelection, and then returns the winner or a tie.
  // Function should be case insensitive to avoid unexpected errors. 
  // If there is a tie, replay the round.

function pickWinner(playerSelection, computerSelection) {
  // Declare empty winner variable and turn player input into lowercase
  let winner;
  playerSelection = playerSelection.toLowerCase();
  // Switch that compares values inputted by the player and the CPU. If there is a tie or an invalid value is typed in, repeat
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

// console.log(pickWinner('ROCK','paper'));
// console.log(pickWinner('scISsors','paper'));
// console.log(pickWinner('paper','paper'));

// Write a function called game() to play a best-of-five game. 

function game() {
  // Initialize variables for score tracking and loop
  let playerScore = 0;
  let computerScore = 0;
  let winner;
  // Since it's best of 5, whoever gets to three first wins
  // This is a single round. Player and computer values are obtained, compared, and the winner is returned.
  while (!winner) {
    const computerChoice = getComputerChoice();
    console.log('Computer choice: ' + computerChoice);
    const playerChoice = prompt('Choose: rock, paper or scissors?');
    winner = pickWinner(playerChoice, computerChoice);
    // If there is no valid input, repeat the process
    if (!winner) {
      console.log('That\'s not a valid option!');
    } else if (winner === 'player') {
      playerScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  console.log(playerScore);
  console.log(computerScore);
  return winner;
}

console.log(game());