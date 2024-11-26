
const canvas = document.createElement('canvas');
document.getElementById('matrix-background').appendChild(canvas);
const ctx = canvas.getContext('2d');

// Розміри екрану
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Символи для ефекту
const characters = '10';

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

// Ініціалізуємо падіння
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

let currentBackground = 'matrix'; // Початковий фон

// Функція для малювання матриці
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (currentBackground === 'matrix') {
        ctx.fillStyle = '#0f0'; // зелений колір для "Матриці"
    } else if (currentBackground === 'stars') {
        ctx.fillStyle = '#fff'; // білий для зірок
    }

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Якщо символ досягнув низу екрану, рестартуємо його
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

// Обробка кнопки зміни фону
document.getElementById('change-bg-btn').addEventListener('click', function() {
    if (currentBackground === 'matrix') {
        currentBackground = 'stars'; // Змінюємо на зірковий фон
    } else {
        currentBackground = 'matrix'; // Повертаємо на "матрицю"
    }
});