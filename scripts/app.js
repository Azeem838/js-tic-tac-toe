import displayController from './dom.js';

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
      currentPlayer = player2;
      return currentPlayer;
    }
    currentPlayer = player1;
    return currentPlayer;
  };

  const markBox = (e) => {
    if (currentPlayer === player1 && e.target.innerHTML === '') {
      e.target.innerHTML = 'O';
      gameboard[e.target.dataset.set] = 'O';
      winner();
      switchPlayer();
      counter += 1;
      draw();
    } else if (currentPlayer === player2 && e.target.innerHTML === '') {
      e.target.innerHTML = 'X';
      gameboard[e.target.dataset.set] = 'X';
      winner();
      switchPlayer();
      counter += 1;
      draw();
    }
  };

  function winner() {
    for (let i = 0; i < 8; i += 1) {
      const first = gameboard[winArr[i][0]];
      const second = gameboard[winArr[i][1]];
      const third = gameboard[winArr[i][2]];
      if (
        first !== ''
        && second !== ''
        && third !== ''
        && first === second
        && second === third
      ) {
        displayController.displayOutcome(currentPlayer);
        displayController.endGame(markBox);
      }
    }
  }

  const draw = () => {
    if (counter === 9 && winner() === undefined) {
      displayController.displayOutcome();
    }
  };

  return { markBox };
};

export default Game;
