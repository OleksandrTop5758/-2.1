// script.js

// Отримуємо елементи
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Функція для перемикання режиму
themeToggleBtn.addEventListener("click", () => {
    // Перевіряємо поточний клас тіла і перемикаємо на інший
    body.classList.toggle("night");
    body.classList.toggle("day");

    // Змінюємо текст кнопки
    if (body.classList.contains("night")) {
        themeToggleBtn.textContent = "Перемкнути на денний режим";
    } else {
        themeToggleBtn.textContent = "Перемкнути на нічний режим";
    }
});

// Ініціалізація класу за замовчуванням
if (!body.classList.contains("night")) {
    body.classList.add("day");
}
