const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let nextDirection = { x: 0, y: 0 };
let food = { x: 15, y: 15 };
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let gameRunning = false;
let gameInterval;

document.getElementById('highScore').textContent = highScore;

function startGame() {
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    score = 0;
    gameRunning = true;

    document.getElementById('score').textContent = score;
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('startBtn').textContent = '⏸️ Pausar';

    placeFood();

    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, 100);

    // Foca o canvas para garantir que as teclas funcionem
    canvas.focus();
}

function pauseGame() {
    gameRunning = false;
    clearInterval(gameInterval);
    document.getElementById('startBtn').textContent = '▶️ Continuar';
}

function gameLoop() {
    if (!gameRunning) return;

    direction = nextDirection;

    const head = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };

    // Colisão com parede
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        endGame();
        return;
    }

    // Colisão com o corpo
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        endGame();
        return;
    }

    snake.unshift(head);

    // Comer a comida
    if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById('score').textContent = score;

        if (score > highScore) {
            highScore = score;
            localStorage.setItem('snakeHighScore', highScore);
            document.getElementById('highScore').textContent = highScore;
        }

        placeFood();
    } else {
        snake.pop();
    }

    draw();
}

function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid
    ctx.strokeStyle = '#1a1a1a';
    for (let i = 0; i < tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }

    // Cobra
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? '#38ef7d' : '#11998e';
        ctx.fillRect(
            segment.x * gridSize + 1,
            segment.y * gridSize + 1,
            gridSize - 2,
            gridSize - 2
        );
    });

    // Comida
    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath();
    ctx.arc(
        food.x * gridSize + gridSize / 2,
        food.y * gridSize + gridSize / 2,
        gridSize / 2 - 2,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

function placeFood() {
    do {
        food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
    } while (snake.some(segment => segment.x === food.x && segment.y === food.y));
}

function changeDirection(dir) {
    const directions = {
        'up': { x: 0, y: -1 },
        'down': { x: 0, y: 1 },
        'left': { x: -1, y: 0 },
        'right': { x: 1, y: 0 }
    };

    const newDir = directions[dir];

    // Evita virar 180 graus
    if (newDir.x !== -direction.x || newDir.y !== -direction.y) {
        nextDirection = newDir;
    }
}

function endGame() {
    gameRunning = false;
    clearInterval(gameInterval);
    document.getElementById('gameOver').style.display = 'block';
    document.getElementById('startBtn').textContent = '🔄 Jogar Novamente';
}

// Controles do teclado
document.addEventListener('keydown', (e) => {
    const keyMap = {
        'ArrowUp': 'up',
        'ArrowDown': 'down',
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
        'w': 'up',
        's': 'down',
        'a': 'left',
        'd': 'right'
    };

    if (keyMap[e.key]) {
        e.preventDefault();
        changeDirection(keyMap[e.key]);
    }

    // Espaço para iniciar
    if (e.key === ' ') {
        e.preventDefault();
        const btn = document.getElementById('startBtn');
        if (btn.textContent === '⏸️ Pausar') {
            pauseGame();
        } else {
            startGame();
        }
    }
});

// Botão iniciar/pausar
document.getElementById('startBtn').addEventListener('click', () => {
    const btn = document.getElementById('startBtn');
    if (btn.textContent === '⏸️ Pausar') {
        pauseGame();
    } else {
        startGame();
    }
});

// Inicializa com a tela desenhada
draw();