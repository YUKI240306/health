function getRandomNumber(min, max, last) {
    let num;
    do {
        num = Math.floor(Math.random() * (max - min) + min);
    } while (num === last);
    return num;
}

const healthTips = [
    "Drink plenty of water every day to stay hydrated.",
    "Get at least 7-8 hours of quality sleep each night.",
    "Eat more fresh fruits and vegetables to boost your immunity.",
    "Take short breaks to stretch if you sit for long periods.",
    "Practice mindfulness or meditation to reduce stress.",
    "Regular physical activity is key to a healthy body and mind.",
    "Limit processed foods and opt for natural ingredients.",
    "Spend time outdoors to get fresh air and sunlight.",
    "Don’t forget regular health check-ups.",
    "A balanced diet helps you feel more energetic and focused."
];

let lastTipIndex = null;
let lastEquation = "";
let healthPoints = 5;

// Зв’язування з HTML
const btnHealthTips = document.getElementById("btnHealthTips");
const healthTipsElement = document.getElementById("healthTips");
const healthPointsElement = document.getElementById("healthPoints");
const purchaseWindow = document.querySelector(".purchaseWindow");
const equationP = document.querySelector(".equasionP");
const equationInput = document.querySelector(".equasionInput");
const equationButton = document.querySelector(".equasionButton");

// Функція для відображення сердець (енергії)
function updateHealthPointsDisplay() {
    healthPointsElement.innerHTML = "💚".repeat(healthPoints) + "💔".repeat(5 - healthPoints);
}

// Функція для показу поради
function showHealthTip() {
    lastTipIndex = getRandomNumber(0, healthTips.length, lastTipIndex);
    healthTipsElement.innerHTML = healthTips[lastTipIndex];

    if (healthPoints > 0) {
        healthPoints--;
        updateHealthPointsDisplay();
    }

    if (healthPoints === 0) {
        healthTipsElement.innerHTML = "You’ve run out of energy! Time to recharge!";
        btnHealthTips.classList.add("visually-hidden");
    }
}

// Функція для генерації випадкового рівняння
function generateRandomEquation() {
    const operators = ["+", "-", "*"];
    const num1 = getRandomNumber(1, 20, null);
    const num2 = getRandomNumber(1, 20, null);
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    lastEquation = `${num1} ${operator} ${num2}`;
    return lastEquation;
}

// Відкриття діалогового вікна для поповнення енергії
function showPurchaseWindow() {
    equationInput.value = "";
    purchaseWindow.showModal();
    equationP.innerHTML = generateRandomEquation() + " = ?";
}

// Перевірка введеної відповіді
function evaluateEquation() {
    const userAnswer = parseInt(equationInput.value, 10);
    const correctAnswer = eval(lastEquation);

    if (userAnswer === correctAnswer) {
        healthPoints = 5; // Повне відновлення енергії
        healthTipsElement.innerHTML = "";
        btnHealthTips.classList.remove("visually-hidden");
        updateHealthPointsDisplay();
        purchaseWindow.close();
    } else {
        alert("Oops! Wrong answer. Try again!");
    }
}

// Додаємо обробники подій
btnHealthTips.addEventListener("click", showHealthTip);
document.getElementById("btnRecharge").addEventListener("click", showPurchaseWindow);
equationButton.addEventListener("click", evaluateEquation);

// Встановити початковий рівень енергії
updateHealthPointsDisplay();
