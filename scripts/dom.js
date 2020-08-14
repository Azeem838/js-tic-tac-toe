const displayController = (() => {
  const render = (gameboard) => {
    for (let i = 0; i < 9; i += 1) {
      const box = document.querySelector(`.box[data-set="${i}"]`);
      box.innerHTML = gameboard[i];
    }
  };

  const boxClicked = (markBox) => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.addEventListener('click', markBox);
    });
  };

  const btnListners = (start, reset) => {
    const startBtn = document.querySelector('#start');
    startBtn.addEventListener('click', start);
    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', reset);
  };

  const endGame = (markBox) => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.removeEventListener('click', markBox);
    });
  };

  const displayOutcome = (currentPlayer) => {
    const outcome = document.getElementById('info');
    if (currentPlayer) {
      outcome.innerHTML = `Congrats ${currentPlayer.name} you have won!`;
    } else {
      outcome.innerHTML = 'Game is a draw!';
    }
  };

  return {
    render,
    boxClicked,
    btnListners,
    endGame,
    displayOutcome,
  };
})();

export default displayController;
