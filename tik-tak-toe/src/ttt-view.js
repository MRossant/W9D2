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
  
  bindEvents() {
    const cellsLi = document.querySelectorAll('li');
    for (let i = 0; i < cellsLi.length; i++){
      cellsLi[i].addEventListener("click", this.handleClick)
    }
  }
  
  handleClick(e) {
    e.preventDefault();
    this.makeMove(e.target);
  }
  

  makeMove(square) {
    
  }

}
// cellsLi.addEventListener('click', handleClick);
module.exports = View;
