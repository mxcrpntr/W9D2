const textClassArray = ["red_t","orange_t","yellow_t","green_t","blue_t","indigo_t","violet_t"];
const bkgdClassArray = ["red_b","orange_b","yellow_b","green_b","blue_b","indigo_b","violet_b"];

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
    if (![...square.classList].includes("clicked")) {
      square.classList.add("clicked");
      if (!this.game.isOver()) {
        this.makeMove.bind(this)(square);
      }
    }
  }

  makeMove(square) {
    let row = square.dataset.row;
    let col = square.dataset.col;
    const pos = [row, col];
    square.innerText = this.game.currentPlayer;
    this.game.playMove(pos);
    if (this.game.isOver()) {
      if (this.game.winner()) {
        const winner = this.game.winner();
        const parentUl = document.querySelector("ul");
        const winnerArray = []
        for (let i = 0; i < parentUl.children.length; i++) {
          let child = parentUl.children[i];
          if (child.innerText === winner) {
            winnerArray.push(child);
            child.classList.add("winner");
          } else {
            child.classList.add("loser");
          }
        }
        const winnerFooter = document.querySelector("h2");
        winnerFooter.innerText = `Congrats, ${this.game.winner().toUpperCase()} has won!`;
        this.winnerLoop(winnerArray);
      } else {
        const parentUl = document.querySelector("ul");
        for (let i = 0; i < parentUl.children.length; i++) {
          let child = parentUl.children[i];
          child.classList.add("loser");
        }
        const drawFooter = document.querySelector("h2");
        drawFooter.innerText = `It's a draw. No one won. :(`;
      
      }
    }
  }

  

  winnerLoop(winners) {
    setInterval(() => {
      for(let i = 0; i < winners.length ; i++) {
        let classList = winners[i].classList;
        let hOne = document.querySelector("h1");
        let hTwo = document.querySelector("h2");
        for(let j = 0; j < textClassArray.length ; j++) {
          if ([...classList].includes(textClassArray[j])) {
            winners[i].classList.remove(textClassArray[j])
          }
          if ([...hOne.classList].includes(textClassArray[j])) {
            hOne.classList.remove(textClassArray[j]);
            hTwo.classList.remove(textClassArray[j]);
          }
        }
        for(let j = 0; j < bkgdClassArray.length ; j++) {
          if ([...classList].includes(bkgdClassArray[j])) {
            winners[i].classList.remove(bkgdClassArray[j])
          }
        }
        let textColor = textClassArray[Math.floor(Math.random()*textClassArray.length)]
        let bkgdColor = bkgdClassArray[Math.floor(Math.random()*bkgdClassArray.length)]
        winners[i].classList.add(textColor);
        winners[i].classList.add(bkgdColor);
        
        hOne.classList.add(textColor);
        hTwo.classList.add(textColor);

      }
    }, 100);
  }


  handleGameOver() {
  }
}

export default View;

