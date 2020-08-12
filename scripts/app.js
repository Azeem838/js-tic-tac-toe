import { displayController } from "./dom.js";

const Game = (player1, player2, currentPlayer, gameboard, counter) => {
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

  const switchPlayer = () => {
    if (currentPlayer === player1) {
      return (currentPlayer = player2);
    } else {
      return (currentPlayer = player1);
    }
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
        displayController.endGame(markBox);
        return true;
      }
    }
    false;
  };

  const markBox = (e) => {
    if (currentPlayer === player1 && e.target.innerHTML === "") {
      e.target.innerHTML = "O";
      gameboard[e.target.dataset.set] = "O";
      winner();
      switchPlayer();
      counter = counter + 1;
      draw();
    } else if (currentPlayer === player2 && e.target.innerHTML === "") {
      e.target.innerHTML = "X";
      gameboard[e.target.dataset.set] = "X";
      winner();
      switchPlayer();
      counter = counter + 1;
      draw();
    }
  };

  const draw = () => {
    if (counter == 9 && winner() == undefined) {
      alert("Game is a draw!");
    }
  };

  return { markBox };
};

export { Game };
