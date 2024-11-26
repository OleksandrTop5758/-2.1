const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Розмір канваса збігається з розмірами вікна
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Символи для ефекту
const symbols = "01abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize; // Кількість колонок символів

// Масив для зберігання координат падіння кожної колонки
const drops = Array(Math.floor(columns)).fill(1);

// Функція малювання
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Легке затемнення для шлейфу
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "lime"; // Колір символів
  ctx.font = `${fontSize}px monospace`;

  // Проходимо по кожній колонці
  for (let i = 0; i < drops.length; i++) {
    const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Випадковий обнулювач, щоб текст "перезавантажувався"
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Падіння тексту вниз
    drops[i]++;
  }
}

// Оновлення анімації кожні 30 мс
setInterval(draw, 30);