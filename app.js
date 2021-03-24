const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('btn');
const WIDTH = 20;
const SNAKE_COLOR = 'blue';

let board = Array();
let currentSnake = [[2, 0], [1, 0], [0, 0]];
let intervalTime = 0;

const drawBox = function(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * WIDTH, y * WIDTH, WIDTH, WIDTH);
}

const drawSnake = function() {
  for (let cell of currentSnake) {
    drawBox(cell[0], cell[1], SNAKE_COLOR);
  }
}

const moveOutcomes = function() {
  ctx.clearRect(0, 0, 200, 200);
  drawSnake();
  for (let cell of currentSnake) {
    cell[0]++;
  }
}

const startGame = function() {
  intervalTime = 1000;
  setInterval(moveOutcomes, intervalTime);
}

btn.addEventListener('click', startGame);
