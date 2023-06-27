class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const ul = document.createElement("ul");
    for (let i = 0; i < 9; i++) {
      let li = document.createElement("li");
      li.setAttribute("data-row", Math.floor(i / 3));
      li.setAttribute("data-col", (i % 3));
      ul.appendChild(li);
    }
    this.el.appendChild(ul);
    ul.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    const square = e.target;
    square.classList.add("clicked");
    this.makeMove.bind(this)(square);
  }

  makeMove(square) {
    let row = square.dataset.row;
    let col = square.dataset.col;
    const pos = [row, col];
    square.innerText = this.game.currentPlayer;
    this.game.playMove(pos);
  }


  handleGameOver() {
  }
}

export default View;