// Функція отримання випадкового числа в діапазоні [min, max), яке не дорівнює last
function getRandomNumber(min, max, last) {
    let num;
    do {
        num = Math.floor(Math.random() * (max - min) + min); // Генеруємо випадкове число
    } while (num === last); // Перегенеруємо, якщо воно таке саме як попереднє
    return num; // Повертаємо число
}

// Список порад про здоров’я
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

// Початкові значення змінних
let lastTipIndex = null; // Запам’ятовуємо індекс останньої поради, щоб не повторювати
let lastEquation = "";   // Зберігаємо останнє рівняння для відновлення енергії
let healthPoints = 5;    // Максимальна кількість енергії (5 сердець)

// Зв’язування зі сторінкою HTML
const btnHealthTips = document.getElementById("btnHealthTips");        // Кнопка "Отримати пораду"
const healthTipsElement = document.getElementById("healthTips");        // Блок, де буде виводитись порада
const healthPointsElement = document.getElementById("healthPoints");    // Блок із серцями (енергія)
const purchaseWindow = document.querySelector(".purchaseWindow");       // Модальне вікно для рівняння
const equationP = document.querySelector(".equasionP");                  // Параграф із прикладом
const equationInput = document.querySelector(".equasionInput");          // Поле введення відповіді
const equationButton = document.querySelector(".equasionButton");        // Кнопка "Перевірити"

// Функція для відображення сердець (енергії) на екрані
function updateHealthPointsDisplay() {
    healthPointsElement.innerHTML = "💚".repeat(healthPoints) + "💔".repeat(5 - healthPoints);
}

// Функція показу випадкової поради
function showHealthTip() {
    // Вибираємо нову випадкову пораду (не таку саму як минула)
    lastTipIndex = getRandomNumber(0, healthTips.length, lastTipIndex);
    healthTipsElement.innerHTML = healthTips[lastTipIndex]; // Відображаємо пораду

    if (healthPoints > 0) {
        healthPoints--; // Зменшуємо кількість енергії (сердець)
        updateHealthPointsDisplay(); // Оновлюємо відображення
    }

    if (healthPoints === 0) { // Якщо енергія закінчилася
        healthTipsElement.innerHTML = "You’ve run out of energy! Time to recharge!"; // Повідомлення
        btnHealthTips.classList.add("visually-hidden"); // Ховаємо кнопку
    }
}

// Функція створення випадкового рівняння
function generateRandomEquation() {
    const operators = ["+", "-", "*"]; // Можливі оператори
    const num1 = getRandomNumber(1, 20, null); // Перше число
    const num2 = getRandomNumber(1, 20, null); // Друге число
    const operator = operators[Math.floor(Math.random() * operators.length)]; // Випадковий оператор

    lastEquation = `${num1} ${operator} ${num2}`; // Зберігаємо рівняння як текст
    return lastEquation; // Повертаємо рівняння
}

// Показуємо модальне вікно для відновлення енергії
function showPurchaseWindow() {
    equationInput.value = ""; // Очищаємо поле введення
    purchaseWindow.showModal(); // Показуємо діалогове вікно
    equationP.innerHTML = generateRandomEquation() + " = ?"; // Показуємо рівняння
}

// Перевірка введеної відповіді
function evaluateEquation() {
    const userAnswer = parseInt(equationInput.value, 10); // Зчитуємо число з поля введення
    const correctAnswer = eval(lastEquation); // Обчислюємо правильну відповідь (обережно з eval у реальних проектах)

    if (userAnswer === correctAnswer) { // Якщо відповідь правильна
        healthPoints = 5; // Повністю відновлюємо енергію
        healthTipsElement.innerHTML = ""; // Очищаємо блок з порадами
        btnHealthTips.classList.remove("visually-hidden"); // Показуємо кнопку знову
        updateHealthPointsDisplay(); // Оновлюємо серця
        purchaseWindow.close(); // Закриваємо вікно
    } else { // Якщо відповідь неправильна
        alert("Oops! Wrong answer. Try again!"); // Повідомлення про помилку
    }
}

// Додаємо обробники подій для кнопок
btnHealthTips.addEventListener("click", showHealthTip); // Кнопка отримати пораду
document.getElementById("btnRecharge").addEventListener("click", showPurchaseWindow); // Кнопка відновити енергію
equationButton.addEventListener("click", evaluateEquation); // Кнопка перевірити відповідь

// Початкове відображення сердець при завантаженні сторінки
updateHealthPointsDisplay();

const arrayOfImages = ["1", "2", "3"];

let galleryImage = 1;

document
  .getElementById("main-image")
  .setAttribute("src", `img/gallery/${galleryImage}.jpg`);

document.getElementById("right-arrow").addEventListener("click", () => {
  galleryImage++;
  if (galleryImage > arrayOfImages.length) {
    galleryImage = 1;
  }
  document
    .getElementById("main-image")
    .setAttribute("src", `img/gallery/${arrayOfImages[galleryImage - 1]}.jpg`);
    console.log(galleryImage);
});

document.getElementById("left-arrow").addEventListener("click", () => {
  galleryImage--;
  if (galleryImage < 1) {
    galleryImage = arrayOfImages.length;
  }
  document
    .getElementById("main-image")
    .setAttribute("src", `img/gallery/${arrayOfImages[galleryImage - 1]}.jpg`);
});


let arrayOfVitamins = [
  {
    id: "0",
    name: "Vitamine A",
    description: "sjhddbdffssf",
    image: "",
    rating:5,
    type:""
  } ,
  {
    id: "0",
    name: "Vitamine A",
    description: "sjhddbdffssf",
    image: "",
    rating:5,
    type:""
  } ,
  {
    id: "0",
    name: "Vitamine A",
    description: "sjhddbdffssf",
    image: "",
    rating:5,
    type:""
  } ,
  {
    id: "0",
    name: "Vitamine A",
    description: "sjhddbdffssf",
    image: "",
    rating:5,
    type:""
  } ,
  {
    id: "0",
    name: "Vitamine A",
    description: "sjhddbdffssf",
    image: "",
    rating:5,
    type:""
  } 
]

console.log(arrayOfVitamins);

arrayOfVitamins.forEach((vitamin) =>  {
  console.log(vitamin);

  let vitaminDiv = document.createElement("div");
  vitaminDiv.innerText = vitamin.name;
  vitaminDiv.classList.add("vitamin");

  document.getElementById("p-vitamin").appendChild(vitaminDiv);
});