// import {  } from "module";


const Player = (name) => {
  const getName = () => name;
  return { getName };
};

const gameBoard = (() => {
  const gameboard = [];

  const player1 = 'eric';
  const player2 = 'azeem';

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
    if (currentPlayer === player1) {
      e.target.innerHTML = 'O'
    }else {
      e.target.innerHTML = 'X';
    }
    switchPlayer();
  }

  return { gameboard, render, boxClicked, switchPlayer };
})();

gameBoard.render();
gameBoard.boxClicked();