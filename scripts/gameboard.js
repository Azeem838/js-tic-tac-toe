const gameBoard = (() => {
  const gameboard = ['X','X','X','X','X','X','X','X','X'];

  const render = () => {
    for(let i = 0; i < 9; i += 1) {
      const box = document.querySelector(`.box[data-set="${i}"]`);
      box.innerHTML = gameboard[i];
    };
  }

  const boxClicked = () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
      box.addEventListener('click', markBox)
    });
  }

  const markBox = (e) => {
    console.log(e);
    e.target.innerHTML = 'O'
  }

  return { gameboard, render, boxClicked };
})();

gameBoard.render();
gameBoard.boxClicked();