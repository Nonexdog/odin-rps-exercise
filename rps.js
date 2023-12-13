// Create function called getComputerChoice() that randomly chooses rock, paper or scissors and return the value.
  // Create an array with rock, paper and scissor in it.
  // Create a variable that generates a random number 0-2 and obtains the item in that position within the array

function getComputerChoice() {
  const RPS = ['rock','paper','scissors'];
  // Get a random number between 0 and 2 inclusive
  const randomSelection = Math.floor(Math.random()*3);
  return RPS.at(randomSelection);
}
console.log('Computer choice: ' + getComputerChoice());

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
        winner = 'Player';
        break;
      } else if (computerSelection === 'paper') {
        winner = 'Computer';
        break;
      } else {
        break;
      }
    case 'paper':
      if (computerSelection === 'rock') {
        winner = 'Player';
        break;
      } else if (computerSelection === 'scissors') {
        winner = 'Computer';
        break;
      } else {
        break;
      }
    case 'scissors':
      if (computerSelection === 'paper') {
        winner = 'Player';
        break;
      } else if (computerSelection === 'rock') {
        winner = 'Computer';
        break;
      } else {
        break;
      }
    default:
      return 'Hey!! That is not a valid selection!!';
  }

  if (winner === 'Player') {
    return `${winner} is the winner!! ${playerSelection} beats ${computerSelection}`;
  } else if (winner === 'Computer') {
    return `${winner} is the winner!! ${computerSelection} beats ${playerSelection}`;
  } else {
    return 'It\'s a tie!!';
  }
}

console.log(pickWinner('ROCK','paper'));
console.log(pickWinner('scISsors','paper'));
console.log(pickWinner('paper','paper'));

// Write a function called game() to play a best-of-five game. 