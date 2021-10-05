const Board = require("/ttt_node/board.js");

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }
  
  setupBoard() {
    let ul = document.createElement('ul');
    this.el.append(ul);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const newLi = document.createElement('li');
        newLi.innerText = 'null';
        newLi.dataset.pos = [i, j];
        ul.append(newLi);
      }
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
