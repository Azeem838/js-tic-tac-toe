import { displayController } from "./dom.js";
import { Game } from "./app.js";
import { Player } from "./player.js";

let gameboard = ["", "", "", "", "", "", "", "", ""];

const start = () => {
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
  gameboard = ["", "", "", "", "", "", "", "", ""];
  displayController.render(gameboard);

  document.querySelector("#player1").value = "";
  document.querySelector("#player2").value = "";
};

displayController.btnListners(start, reset);
