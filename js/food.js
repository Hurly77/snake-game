import { apple, board } from './selectors.js';
import { snakeBody } from './snake.js';
import { mountScore, unmountScore } from './score.js';

let appPos;
let appleCount = 0;

export function addFood() {
 appPos = {
  x: Math.round(Math.random() * 20),
  y: Math.round(Math.random() * 20),
 };

 apple.style.gridRowStart = appPos.y;
 apple.style.gridColumnStart = appPos.x;

 apple.className = 'apple';
 board.appendChild(apple);
 return appPos;
}

export const isApple = () => {
 let sb = snakeBody[0];
 let d = new Date();
 console.log(sb.x === appPos.x && sb.y === appPos.y, d.getMilliseconds());
 return sb.x === appPos.x && sb.y === appPos.y;
};

export function eatApple() {
 let sb = snakeBody[snakeBody.length - 1];
 appPos = addFood();
 snakeBody.push({ x: sb.x - 1, y: sb.y - 1 });
 appleCount += 1;
}

export function updateFood() {
 unmountScore();
 apple.style.gridRowStart = appPos.y;
 apple.style.gridColumnStart = appPos.x;
 apple.className = 'apple';
 board.appendChild(apple);
 mountScore(appleCount);
}
