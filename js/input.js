let snakePos = { x: 0, y: 0 };
let lastSnakePos = { x: 0, y: 0 };

window.addEventListener('keydown', (e) => {
	switch (e.key) {
		case 'ArrowUp':
			if (lastSnakePos.y !== 0) break;
			snakePos = { x: 0, y: -1 };
			break;
		case 'ArrowDown':
			if (lastSnakePos.y !== 0) break;
			snakePos = { x: 0, y: 1 };
			break;
		case 'ArrowLeft':
			if (lastSnakePos.x !== 0) break;
			snakePos = { x: -1, y: 0 };
			break;
		case 'ArrowRight':
			if (lastSnakePos.x !== 0) break;
			snakePos = { x: 1, y: 0 };
			break;
	}
});

export function getSnakePos() {
	lastSnakePos = snakePos;
	return snakePos;
}
