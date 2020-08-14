import displayController from './dom.js';
import Game from './app.js';
import Player from './player.js';

let gameboard = ['', '', '', '', '', '', '', '', ''];

const start = () => {
  const firstPlayer = document.querySelector('#player1');
  const secondPlayer = document.querySelector('#player2');
  const firstPlayerName = firstPlayer.value;
  const secondPlayerName = secondPlayer.value;
  const player1 = Player(firstPlayerName);
  const player2 = Player(secondPlayerName);
  const currentPlayer = player1;
  const counter = 0;
  const newGame = Game(player1, player2, currentPlayer, gameboard, counter);

  if (firstPlayerName || secondPlayerName) {
    displayController.render(gameboard);
    displayController.boxClicked(newGame.markBox);

    const startBtn = document.querySelector('#start');
    startBtn.classList.add('hide');
  }

  return false;
};

const reset = () => {
  gameboard = ['', '', '', '', '', '', '', '', ''];
  displayController.render(gameboard);

  document.querySelector('#player1').value = '';
  document.querySelector('#player2').value = '';

  document.getElementById('info').innerHTML = '';

  const startBtn = document.querySelector('#start');
  startBtn.classList.remove('hide');
};

displayController.btnListners(start, reset);
