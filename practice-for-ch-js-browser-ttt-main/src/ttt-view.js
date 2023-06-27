class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }
  
  setupBoard() {
    const ul =  document.createElement("ul");
    for (let i = 0; i < 9; i++) {
      let li =  document.createElement("li");
      li.setAttribute("data-row", Math.floor(i / 3) + 1);
      li.setAttribute("data-col", (i % 3) + 1 );
      ul.appendChild(li);
    }
    this.el.appendChild(ul);
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;