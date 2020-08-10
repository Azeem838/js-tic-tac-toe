const gameBoard = (() => {
  const gameboard = ['X','X','X','X','X','X','X','X','X'];

  const render = () => {
    for(let i = 0; i < 9; i += 1) {
      const box = document.querySelector(`.box[data-set="${i}"]`);
      box.innerHTML = gameboard[i];
    };
  }
  return { gameboard, render }
})();

gameBoard.render();