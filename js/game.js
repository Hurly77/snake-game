import {
 addSnakeToBoard,
 snakeBody,
 updateSnakePos,
 checkIntersection,
} from './snake.js';
import { addFood, updateFood, eatApple, isApple } from './food.js';
import { button, board } from './selectors.js';
import { gameOverModal } from './menu.js';

let timer;
let pause = false;

button.textContent = "Pause"

function isGameOver() {
 let sb = snakeBody[0];
 return !sb.x || !sb.y || sb.x > 21 || sb.y > 21 || checkIntersection();
}

function endGame() {
 clearInterval(timer);
 gameOverModal()
}

function start() {
 if (isGameOver()) endGame();
 board.innerHTML = '';
 if (isApple()) {
  eatApple();
  updateFood();
 }
 updateSnakePos();
 addSnakeToBoard();
 updateFood();
}

addFood();


function pauseGame(){
 pause = !pause;
 if (pause) {
  clearInterval(timer);
  button.textContent = "Resume"
 } else {
  button.textContent = "Pause"
  timer = setInterval(start, 100);
 }
}


button.addEventListener('click', () => {
 pauseGame()
});

window.addEventListener('keydown', (e) => {
 if (e.key === "Escape"){
  pauseGame()
 }
})

timer = setInterval(start, 100);
