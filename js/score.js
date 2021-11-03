import { score, console } from './selectors.js';

export function mountScore(appleCount) {
 score.innerHTML = appleCount;
 score.className = 'score';
 console.appendChild(score);
}

export function unmountScore() {
 score.remove();
}
