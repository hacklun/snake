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
    snake.forEach(cell => {
        cells[cell].classList.add('snake');
    });
}

const update = () => {

}

createBoard();
drawSnake();