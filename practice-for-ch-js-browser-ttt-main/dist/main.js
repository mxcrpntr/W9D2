/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ttt_node_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ttt_node/game.js */ \"./ttt_node/game.js\");\n/* harmony import */ var _ttt_node_game_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ttt_node_game_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ttt_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ttt-view.js */ \"./src/ttt-view.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const el = document.querySelector('.ttt');\n  const game = new (_ttt_node_game_js__WEBPACK_IMPORTED_MODULE_0___default())();\n  const view = new _ttt_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game,el);\n\n\n\n\n\n\n  var maxParticleCount = 150; //set max confetti count\nvar particleSpeed = 2; //set the particle animation speed\nvar startConfetti; //call to start confetti animation\nvar stopConfetti; //call to stop adding confetti\nvar toggleConfetti; //call to start or stop the confetti animation depending on whether it's already running\nvar removeConfetti; //call to stop the confetti animation and remove all confetti immediately\n\n(function() {\n\tstartConfetti = startConfettiInner;\n\tstopConfetti = stopConfettiInner;\n\ttoggleConfetti = toggleConfettiInner;\n\tremoveConfetti = removeConfettiInner;\n\tvar colors = [\"DodgerBlue\", \"OliveDrab\", \"Gold\", \"Pink\", \"SlateBlue\", \"LightBlue\", \"Violet\", \"PaleGreen\", \"SteelBlue\", \"SandyBrown\", \"Chocolate\", \"Crimson\"]\n\tvar streamingConfetti = false;\n\tvar animationTimer = null;\n\tvar particles = [];\n\tvar waveAngle = 0;\n\t\n\tfunction resetParticle(particle, width, height) {\n\t\tparticle.color = colors[(Math.random() * colors.length) | 0];\n\t\tparticle.x = Math.random() * width;\n\t\tparticle.y = Math.random() * height - height;\n\t\tparticle.diameter = Math.random() * 10 + 5;\n\t\tparticle.tilt = Math.random() * 10 - 10;\n\t\tparticle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;\n\t\tparticle.tiltAngle = 0;\n\t\treturn particle;\n\t}\n\n\tfunction startConfettiInner() {\n\t\tvar width = window.innerWidth;\n\t\tvar height = window.innerHeight;\n\t\twindow.requestAnimFrame = (function() {\n\t\t\treturn window.requestAnimationFrame ||\n\t\t\t\twindow.webkitRequestAnimationFrame ||\n\t\t\t\twindow.mozRequestAnimationFrame ||\n\t\t\t\twindow.oRequestAnimationFrame ||\n\t\t\t\twindow.msRequestAnimationFrame ||\n\t\t\t\tfunction (callback) {\n\t\t\t\t\treturn window.setTimeout(callback, 16.6666667);\n\t\t\t\t};\n\t\t})();\n\t\tvar canvas = document.getElementById(\"confetti-canvas\");\n\t\tif (canvas === null) {\n\t\t\tcanvas = document.createElement(\"canvas\");\n\t\t\tcanvas.setAttribute(\"id\", \"confetti-canvas\");\n\t\t\tcanvas.setAttribute(\"style\", \"display:block;z-index:999999;pointer-events:none\");\n\t\t\tdocument.body.appendChild(canvas);\n\t\t\tcanvas.width = width;\n\t\t\tcanvas.height = height;\n\t\t\twindow.addEventListener(\"resize\", function() {\n\t\t\t\tcanvas.width = window.innerWidth;\n\t\t\t\tcanvas.height = window.innerHeight;\n\t\t\t}, true);\n\t\t}\n\t\tvar context = canvas.getContext(\"2d\");\n\t\twhile (particles.length < maxParticleCount)\n\t\t\tparticles.push(resetParticle({}, width, height));\n\t\tstreamingConfetti = true;\n\t\tif (animationTimer === null) {\n\t\t\t(function runAnimation() {\n\t\t\t\tcontext.clearRect(0, 0, window.innerWidth, window.innerHeight);\n\t\t\t\tif (particles.length === 0)\n\t\t\t\t\tanimationTimer = null;\n\t\t\t\telse {\n\t\t\t\t\tupdateParticles();\n\t\t\t\t\tdrawParticles(context);\n\t\t\t\t\tanimationTimer = requestAnimFrame(runAnimation);\n\t\t\t\t}\n\t\t\t})();\n\t\t}\n\t}\n\n\tfunction stopConfettiInner() {\n\t\tstreamingConfetti = false;\n\t}\n\n\tfunction removeConfettiInner() {\n\t\tstopConfetti();\n\t\tparticles = [];\n\t}\n\n\tfunction toggleConfettiInner() {\n\t\tif (streamingConfetti)\n\t\t\tstopConfettiInner();\n\t\telse\n\t\t\tstartConfettiInner();\n\t}\n\n\tfunction drawParticles(context) {\n\t\tvar particle;\n\t\tvar x;\n\t\tfor (var i = 0; i < particles.length; i++) {\n\t\t\tparticle = particles[i];\n\t\t\tcontext.beginPath();\n\t\t\tcontext.lineWidth = particle.diameter;\n\t\t\tcontext.strokeStyle = particle.color;\n\t\t\tx = particle.x + particle.tilt;\n\t\t\tcontext.moveTo(x + particle.diameter / 2, particle.y);\n\t\t\tcontext.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);\n\t\t\tcontext.stroke();\n\t\t}\n\t}\n\n\tfunction updateParticles() {\n\t\tvar width = window.innerWidth;\n\t\tvar height = window.innerHeight;\n\t\tvar particle;\n\t\twaveAngle += 0.01;\n\t\tfor (var i = 0; i < particles.length; i++) {\n\t\t\tparticle = particles[i];\n\t\t\tif (!streamingConfetti && particle.y < -15)\n\t\t\t\tparticle.y = height + 100;\n\t\t\telse {\n\t\t\t\tparticle.tiltAngle += particle.tiltAngleIncrement;\n\t\t\t\tparticle.x += Math.sin(waveAngle);\n\t\t\t\tparticle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;\n\t\t\t\tparticle.tilt = Math.sin(particle.tiltAngle) * 15;\n\t\t\t}\n\t\t\tif (particle.x > width + 20 || particle.x < -20 || particle.y > height) {\n\t\t\t\tif (streamingConfetti && particles.length <= maxParticleCount)\n\t\t\t\t\tresetParticle(particle, width, height);\n\t\t\t\telse {\n\t\t\t\t\tparticles.splice(i, 1);\n\t\t\t\t\ti--;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n})();\n\n});\n\n//# sourceURL=webpack://practice-for-ch-js-browser-ttt-main/./src/index.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst textClassArray = [\"red_t\",\"orange_t\",\"yellow_t\",\"green_t\",\"blue_t\",\"indigo_t\",\"violet_t\"];\nconst bkgdClassArray = [\"red_b\",\"orange_b\",\"yellow_b\",\"green_b\",\"blue_b\",\"indigo_b\",\"violet_b\"];\n\nclass View {\n  constructor(game, el) {\n    this.game = game;\n    this.el = el;\n    this.setupBoard();\n  }\n\n\n\n  setupBoard() {\n    const ul = document.createElement(\"ul\");\n    for (let i = 0; i < 9; i++) {\n      let li = document.createElement(\"li\");\n      li.setAttribute(\"data-row\", Math.floor(i / 3));\n      li.setAttribute(\"data-col\", (i % 3));\n      ul.appendChild(li);\n    }\n    this.el.appendChild(ul);\n    ul.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n\n  handleClick(e) {\n    const square = e.target;\n    if (![...square.classList].includes(\"clicked\")) {\n      square.classList.add(\"clicked\");\n      if (!this.game.isOver()) {\n        this.makeMove.bind(this)(square);\n      }\n    }\n  }\n\n  makeMove(square) {\n    let row = square.dataset.row;\n    let col = square.dataset.col;\n    const pos = [row, col];\n    square.innerText = this.game.currentPlayer;\n    this.game.playMove(pos);\n    if (this.game.isOver()) {\n      if (this.game.winner()) {\n        const winner = this.game.winner();\n        const parentUl = document.querySelector(\"ul\");\n        const winnerArray = []\n        for (let i = 0; i < parentUl.children.length; i++) {\n          let child = parentUl.children[i];\n          if (child.innerText === winner) {\n            winnerArray.push(child);\n            child.classList.add(\"winner\");\n          } else {\n            child.classList.add(\"loser\");\n          }\n        }\n        const winnerFooter = document.querySelector(\"h2\");\n        winnerFooter.innerText = `Congrats, ${this.game.winner().toUpperCase()} has won!`;\n        this.winnerLoop(winnerArray);\n      } else {\n        const parentUl = document.querySelector(\"ul\");\n        for (let i = 0; i < parentUl.children.length; i++) {\n          let child = parentUl.children[i];\n          child.classList.add(\"loser\");\n        }\n        const drawFooter = document.querySelector(\"h2\");\n        drawFooter.innerText = `It's a draw. No one won. :(`;\n      \n      }\n    }\n  }\n\n  \n\n  winnerLoop(winners) {\n    setInterval(() => {\n      for(let i = 0; i < winners.length ; i++) {\n        let classList = winners[i].classList;\n        let hOne = document.querySelector(\"h1\");\n        let hTwo = document.querySelector(\"h2\");\n        for(let j = 0; j < textClassArray.length ; j++) {\n          if ([...classList].includes(textClassArray[j])) {\n            winners[i].classList.remove(textClassArray[j])\n          }\n          if ([...hOne.classList].includes(textClassArray[j])) {\n            hOne.classList.remove(textClassArray[j]);\n            hTwo.classList.remove(textClassArray[j]);\n          }\n        }\n        for(let j = 0; j < bkgdClassArray.length ; j++) {\n          if ([...classList].includes(bkgdClassArray[j])) {\n            winners[i].classList.remove(bkgdClassArray[j])\n          }\n        }\n        let textColor = textClassArray[Math.floor(Math.random()*textClassArray.length)]\n        let bkgdColor = bkgdClassArray[Math.floor(Math.random()*bkgdClassArray.length)]\n        winners[i].classList.add(textColor);\n        winners[i].classList.add(bkgdColor);\n        \n        hOne.classList.add(textColor);\n        hTwo.classList.add(textColor);\n\n      }\n    }, 100);\n  }\n\n\n  handleGameOver() {\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);\n\n\n\n//# sourceURL=webpack://practice-for-ch-js-browser-ttt-main/./src/ttt-view.js?");

/***/ }),

/***/ "./ttt_node/board.js":
/*!***************************!*\
  !*** ./ttt_node/board.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\n\nclass Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n  }\n\n  isEmptyPos(pos) {\n    if (!Board.isValidPos(pos)) {\n      throw new MoveError('Is not valid position!');\n    }\n\n    return (this.grid[pos[0]][pos[1]] === null);\n  }\n\n  isOver() {\n    if (this.winner() != null) {\n      return true;\n    }\n\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        if (this.isEmptyPos([rowIdx, colIdx])) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }\n\n  placeMark(pos, mark) {\n    if (!this.isEmptyPos(pos)) {\n      throw new MoveError('Is not an empty position!');\n    }\n\n    this.grid[pos[0]][pos[1]] = mark;\n  }\n\n  print() {\n    const strs = [];\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      const marks = [];\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        marks.push(\n          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \"\n        );\n      }\n      strs.push(`${marks.join('|')}\\n`);\n    }\n\n    console.log(strs.join('-----\\n'));\n  }\n\n  winner() {\n    const posSeqs = [\n      // horizontals\n      [[0, 0], [0, 1], [0, 2]],\n      [[1, 0], [1, 1], [1, 2]],\n      [[2, 0], [2, 1], [2, 2]],\n      // verticals\n      [[0, 0], [1, 0], [2, 0]],\n      [[0, 1], [1, 1], [2, 1]],\n      [[0, 2], [1, 2], [2, 2]],\n      // diagonals\n      [[0, 0], [1, 1], [2, 2]],\n      [[2, 0], [1, 1], [0, 2]]\n    ];\n\n    for (let i = 0; i < posSeqs.length; i++) {\n      const winner = this.winnerHelper(posSeqs[i]);\n      if (winner != null) {\n        return winner;\n      }\n    }\n\n    return null;\n  }\n\n  winnerHelper(posSeq) {\n    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {\n      const targetMark = Board.marks[markIdx];\n      let winner = true;\n      for (let posIdx = 0; posIdx < 3; posIdx++) {\n        const pos = posSeq[posIdx];\n        const mark = this.grid[pos[0]][pos[1]];\n\n        if (mark != targetMark) {\n          winner = false;\n        }\n      }\n\n      if (winner) {\n        return targetMark;\n      }\n    }\n\n    return null;\n  }\n\n  static isValidPos(pos) {\n    return (0 <= pos[0]) &&\n    (pos[0] < 3) &&\n    (0 <= pos[1]) &&\n    (pos[1] < 3);\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 3; i++) {\n      grid.push([]);\n      for (let j = 0; j < 3; j++) {\n        grid[i].push(null);\n      }\n    }\n\n    return grid;\n  }\n}\n\nBoard.marks = ['x', 'o'];\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack://practice-for-ch-js-browser-ttt-main/./ttt_node/board.js?");

/***/ }),

/***/ "./ttt_node/game.js":
/*!**************************!*\
  !*** ./ttt_node/game.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./ttt_node/board.js\");\nconst MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.currentPlayer = Board.marks[0];\n  }\n\n  isOver() {\n    return this.board.isOver();\n  }\n\n  playMove(pos) {\n    this.board.placeMark(pos, this.currentPlayer);\n    this.swapTurn();\n  }\n\n  promptMove(reader, callback) {\n    const game = this;\n\n    this.board.print();\n    console.log(`Current Turn: ${this.currentPlayer}`);\n\n    reader.question('Enter rowIdx: ', rowIdxStr => {\n      const rowIdx = parseInt(rowIdxStr);\n      reader.question('Enter colIdx: ', colIdxStr => {\n        const colIdx = parseInt(colIdxStr);\n        callback([rowIdx, colIdx]);\n      });\n    });\n  }\n\n  run(reader, gameCompletionCallback) {\n    this.promptMove(reader, move => {\n      try {\n        this.playMove(move);\n      } catch (e) {\n        if (e instanceof MoveError) {\n          console.log(e.msg);\n        } else {\n          throw e;\n        }\n      }\n\n      if (this.isOver()) {\n        this.board.print();\n        if (this.winner()) {\n          console.log(`${this.winner()} has won!`);\n        } else {\n          console.log('NO ONE WINS!');\n        }\n        gameCompletionCallback();\n      } else {\n        // continue loop\n        this.run(reader, gameCompletionCallback);\n      }\n    });\n  }\n\n  swapTurn() {\n    if (this.currentPlayer === Board.marks[0]) {\n      this.currentPlayer = Board.marks[1];\n    } else {\n      this.currentPlayer = Board.marks[0];\n    }\n  }\n\n  winner() {\n    return this.board.winner();\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack://practice-for-ch-js-browser-ttt-main/./ttt_node/game.js?");

/***/ }),

/***/ "./ttt_node/moveError.js":
/*!*******************************!*\
  !*** ./ttt_node/moveError.js ***!
  \*******************************/
/***/ ((module) => {

eval("const MoveError = function (msg) { this.msg = msg; };\n\n// MoveError really should be a child class of the built in Error object provided\n// by Javascript, but since we haven't covered inheritance yet, we'll just\n// let it be a vanilla Object for now!\n\nmodule.exports = MoveError;\n\n\n//# sourceURL=webpack://practice-for-ch-js-browser-ttt-main/./ttt_node/moveError.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;