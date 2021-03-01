const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playAgain = document.getElementById('play-button');

rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);
playAgain.addEventListener('click', playGame);


function playGame () {
  const gameElements = ["rock", "paper", "scissors"];
  playerInput = gameElements
  opponentInput = Math.floor(Math.random())* gameElements.length
  

}