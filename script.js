const gameResult = document.getElementById('game-result')
const playAgain = document.getElementById('play-button');

const gameBtns = document.querySelectorAll('img');
gameBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => playGame(e.target.classList.value));
});

function playGame (playerChoice) {
  opponentChoice = computerChoice()
  
  switch (playerChoice) {
    case 'rock':
      if (opponentChoice === 'paper') lose(playerChoice, opponentChoice);
      if(opponentChoice === 'scissors') win(playerChoice, opponentChoice);
      break;
    case 'paper':
      if (opponentChoice === 'scissors') lose(playerChoice, opponentChoice);
      if (opponentChoice === 'rock') win(playerChoice, opponentChoice);
      break;
    case 'scissors':
      if(opponentChoice === 'rock') lose(playerChoice, opponentChoice);
      if (opponentChoice === 'paper') win(playerChoice, opponentChoice);
      break;
  }
    if (playerChoice === opponentChoice) {
      gameResult.textContent = `You chose ${playerChoice} and the opponent chose ${opponentChoice}, It's a draw`
      };
  }

function lose (playerChoice, opponentChoice){
  return gameResult.textContent = `You chose ${playerChoice} and the opponent chose ${opponentChoice}, You Lose!`
  }

function win (playerChoice, opponentChoice){
  return gameResult.textContent = `You chose ${playerChoice} and the opponent chose ${opponentChoice}, You Win!`
}

function computerChoice(){
  const gameElements = ["rock", "paper", "scissors"];
  opponentInput = Math.floor(Math.random()* gameElements.length);
  return  gameElements [opponentInput];
}

playAgain.addEventListener('click',() => play('playAgain'));
const play = () => window.location.reload();


