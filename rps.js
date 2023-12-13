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

// Write a function called game() to play a best-of-five game. 