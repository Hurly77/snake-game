import { getSnakePos } from './input.js';
import { board } from './selectors.js';

export const snakeBody = [{ x: 11, y: 11 }];

function hasIntersected(pos1, pos2) {
 return pos1.x === pos2.x && pos1.y === pos2.y;
}

export function checkIntersection() {
 return snakeBody.some((segment, idx) => {
  if (idx === 0) return false;
  return hasIntersected(segment, snakeBody[0]);
 });
}

export function updateSnakePos() {
 const snakePos = getSnakePos();

 for (let i = snakeBody.length - 2; i >= 0; i--) {
  if (i == 0) snakeBody[i + 1].className = 'snake first';
  snakeBody[i + 1] = { ...snakeBody[i] };
 }
 snakeBody[0].x += snakePos.x;
 snakeBody[0].y += snakePos.y;
}

export function addSnakeToBoard() {
 snakeBody.forEach((segment) => {
  const snakeElement = document.createElement('div');
  snakeElement.style.gridRowStart = segment.y;
  snakeElement.style.gridColumnStart = segment.x;
  snakeElement.classList.add('snake');
  board.appendChild(snakeElement);
 });
}
