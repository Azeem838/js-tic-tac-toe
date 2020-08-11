// import {  } from "module";

const Player = (name) => {
  return { name };
};

const gameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const player1 = Player("eric");
  const player2 = Player("azeem");

  let currentPlayer = player1;

  const switchPlayer = () => {
    if (currentPlayer === player1) {
      return (currentPlayer = player2);
    } else {
      return (currentPlayer = player1);
    }
  };

  const render = () => {
    for (let i = 0; i < 9; i += 1) {
      const box = document.querySelector(`.box[data-set="${i}"]`);
      box.innerHTML = gameboard[i];
    }
  };

  const boxClicked = () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.addEventListener("click", markBox);
    });
  };

  const winner = () => {
    for (let i = 0; i < 8; i++) {
      let first = gameboard[winArr[i][0]];
      let second = gameboard[winArr[i][1]];
      let third = gameboard[winArr[i][2]];
      if (
        first !== "" &&
        second !== "" &&
        third !== "" &&
        first === second &&
        second === third
      ) {
        alert("Congrats " + currentPlayer.name + " you have won!");
      }
    }
  };

  const markBox = (e) => {
    if (currentPlayer === player1 && e.target.innerHTML === "") {
      e.target.innerHTML = "O";
      gameboard[e.target.dataset.set] = "O";
      winner();
      switchPlayer();
    } else if (currentPlayer === player2 && e.target.innerHTML === "") {
      e.target.innerHTML = "X";
      gameboard[e.target.dataset.set] = "X";
      winner();
      switchPlayer();
    }
  };

  return { gameboard, render, boxClicked, markBox, winner, winArr };
})();

gameBoard.render();
gameBoard.boxClicked();
