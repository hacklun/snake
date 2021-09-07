const board = document.getElementById('board');
const cells = [];
const WIDTH = 10;

let snake = [0, 1, 2];

const createBoard = () => {
    for (let i = 0; i < WIDTH * WIDTH; i++) {
        const cell = document.createElement('div');
        board.appendChild(cell);
        cells.push(cell);
    }
}

const drawSnake = () => {
    cells.forEach((cell, index) => {

    });
}

createBoard();