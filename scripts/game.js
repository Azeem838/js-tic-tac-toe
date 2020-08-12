import { displayController } from "./dom.js";
import { Game } from "./app.js";
import { Player } from "./player.js";

const start = () => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  let firstPlayerName = document.querySelector("#player1").value;
  let secondPlayerName = document.querySelector("#player2").value;
  const player1 = Player(firstPlayerName);
  const player2 = Player(secondPlayerName);
  let currentPlayer = player1;
  let counter = 0;
  const newGame = Game(player1, player2, currentPlayer, gameboard, counter);

  if (firstPlayerName == "" || secondPlayerName == "") {
    alert("Player names can't be blank");
  } else {
    displayController.render(gameboard);
    displayController.boxClicked(newGame.markBox);
  }
};

const reset = () => {
  return start();
};

displayController.btnListners(start, reset);
