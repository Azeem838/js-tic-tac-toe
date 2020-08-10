// import {  } from "module";


const Player = (name) => {
  return { name };
};

const gameBoard = (() => {
  const gameboard = ['','','','','','','','',''];

  const player1 = Player('eric');
  const player2 = Player('azeem');

  let currentPlayer = player1;

  const switchPlayer = () => {
    if (currentPlayer === player1) {
      return currentPlayer = player2;
    }else {
      return currentPlayer = player1
    }
  };

  const render = () => {
    for(let i = 0; i < 9; i += 1) {
      const box = document.querySelector(`.box[data-set="${i}"]`);
      box.innerHTML = gameboard[i];
    };
  }

  const boxClicked = () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
      box.addEventListener('click', markBox);
    });
  }

  const markBox = (e) => {
    if (currentPlayer === player1 && e.target.innerHTML === '') {
      e.target.innerHTML = "O";
      switchPlayer();
    } else if(currentPlayer === player2 && e.target.innerHTML === '') {
      e.target.innerHTML = "X";
      switchPlayer();
    }
  }

  return { gameboard, render, boxClicked, switchPlayer };
})();

gameBoard.render();
gameBoard.boxClicked();