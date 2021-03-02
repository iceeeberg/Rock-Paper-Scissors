const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const gameResult = document.getElementById('game-result')
const playAgain = document.getElementById('play-button');

rock.addEventListener('click', () => {
  playGame('rock');
});
paper.addEventListener('click', () => {
  playGame('paper');
});
scissors.addEventListener('click',() => {
  playGame('scissors');
});

function playGame (playerChoice) {
  const gameElements = ["rock", "paper", "scissors"];
  playerInput = playerChoice;

  opponentInput = Math.floor(Math.random()* gameElements.length);
  opponentChoice = gameElements [opponentInput];

  if (playerInput === "rock" && opponentChoice ==="paper") {
    gameResult.textContent = 'You chose' + ' ' + playerInput  + ' ' + 'and the opponent chose' + ' ' + 
    opponentChoice + ',' + ' ' + 'You Lose!';
  };
  
  if (playerInput === "paper" && opponentChoice ==="scissors") {
  gameResult.textContent = 'You chose' + ' ' + playerInput  + ' ' + 'and the opponent chose' + ' ' + 
  opponentChoice + ',' + ' ' + 'You Lose!';
 };

 if (playerInput === "scissors" && opponentChoice ==="rock") {
  gameResult.textContent = 'You chose' + ' ' + playerInput  + ' ' + 'and the opponent chose' + ' ' + 
  opponentChoice + ',' + ' ' + 'You Lose!';
 }; 

 if (playerInput === "scissors" && opponentChoice ==="paper") {
  gameResult.textContent = 'You chose' + ' ' + playerInput  + ' ' + 'and the opponent chose' + ' ' + 
  opponentChoice + ',' + ' ' + 'You Win!';
 } 

 if (playerInput === "paper" && opponentChoice ==="rock") {
  gameResult.textContent = 'You chose' + ' ' + playerInput  + ' ' + 'and the opponent chose' + ' ' + 
  opponentChoice + ',' + ' ' + 'You Win!';
 }; 

 if (playerInput === "rock" && opponentChoice ==="scissors") {
  gameResult.textContent = 'You chose' + ' ' + playerInput  + ' ' + 'and the opponent chose' + ' ' + 
  opponentChoice + ',' +  ' '  + 'You Win!';
 }; 

 if (playerInput === opponentChoice) {
  gameResult.textContent = 'You chose' + ' ' + playerInput  + ' ' + 'and the opponent chose' + ' ' + 
  opponentChoice + ',' + ' ' +  "It's a draw!";
 }

};

playAgain.addEventListener('click',() => {
  play('playAgain');
});

function play(){
  window.location.reload();
};

