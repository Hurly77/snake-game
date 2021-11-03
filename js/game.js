import {
 addSnakeToBoard,
 snakeBody,
 updateSnakePos,
 checkIntersection,
} from './snake.js';
import { addFood, updateFood, eatApple, isApple } from './food.js';
import { button, board } from './selectors.js';

let timer;
let pause = false;

function isGameOver() {
 let sb = snakeBody[0];
 return !sb.x || !sb.y || sb.x > 21 || sb.y > 21 || checkIntersection();
}

function endGame() {
 clearInterval(timer);
 confirm('Play again');
 window.location = '/';
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

button.addEventListener('click', () => {
 pause = !pause;
 if (pause) {
  clearInterval(timer);
 } else {
  timer = setInterval(start, 100);
 }
});

timer = setInterval(start, 100);
