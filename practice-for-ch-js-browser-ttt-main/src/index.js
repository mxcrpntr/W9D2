import Game from "../ttt_node/game.js";
import View from "./ttt-view.js";

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector('.ttt');
  const game = new Game();
  const view = new View(game,el);
});