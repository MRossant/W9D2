const View = require("./ttt-view.js");
const Game = require("/ttt_node/game.js");

window.Game = Game;
window.View = View;

document.addEventListener("DOMContentLoaded", () => {
  let viewEle = document.querySelector('.ttt');
  let game = new Game();
  let view = new View(game, viewEle);
});
