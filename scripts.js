// Основное задание по верстке макета:

function gameGTN () {
  const quiz = [
    { 
        question: "Какой цвет небо?", 
        options: ["1. Красный", "2. Синий", "3. Зеленый"], 
        correctAnswer: 2 
    },
    { 
        question: "Сколько дней в неделе?", 
        options: ["1. Шесть", "2. Семь", "3. Восемь"], 
        correctAnswer: 2 
    },
    { 
        question: "Сколько у человека пальцев на одной руке?", 
        options: ["1. Четыре", "2. Пять", "3. Шесть"], 
        correctAnswer: 2 
    }
];
let score = 0;
for (let i = 0; i < quiz.length; i++) {
    let currentQuiz = quiz[i];
    let message = currentQuiz.question + "\n" + currentQuiz.options.join("\n");
    let userAnswer = prompt(message);
    if (Number(userAnswer) === currentQuiz.correctAnswer) {
        score++;
    }
}
alert("Игра окончена! Количество правильных ответов: " + score + " из " + quiz.length);
}

function gameGGN () {
  const secret = Math.floor(Math.random() * 100) + 1;
  let guess;
  while (guess !== secret) {
      guess = +prompt("Угадай число от 1 до 100:");
      if (guess < secret) alert("Больше!");
      if (guess > secret) alert("Меньше!");
  }
  alert("Вы угадали!");
}



function gameGSA () {
  const operations = ['+', '-', '*', '/'];
  const op = operations[Math.floor(Math.random() * operations.length)];
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const task = `${num1} ${op} ${num2}`;
  const correctAnswer = eval(task);
  const userAnswer = parseFloat(prompt(`Решите задачу: ${task}`));
  if (userAnswer === correctAnswer) {
      alert("Верно!");
  } else {
      alert(`Не верно !`);
  }
}



function gameGRТ() {
    const text = prompt("Введите текст, который нужно перевернуть:");
    if (text === null) {
        return;
    }
    
    if (text.trim() === "") {
        alert("Вы ничего не ввели! Попробуйте еще раз.");
        return;
    }
    const reversedtext = text.split('').reverse().join('');
    alert("Перевернутый текст:\n" + reversedtext);
}



function gameKNB() {
  const userChoice = prompt("Введите: камень, ножницы или бумага:").toLowerCase();
  const choices = ["камень", "ножницы", "бумага"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  let result = "";
  if (userChoice === computerChoice) {
      result = "Ничья!";
  } else if (
      (userChoice === "камень" && computerChoice === "ножницы") ||
      (userChoice === "ножницы" && computerChoice === "бумага") ||
      (userChoice === "бумага" && computerChoice === "камень")
  ) {
      result = "Вы победили!";
  } else {
      result = "Компьютер победил!";
  }
  alert(
      "Ваш выбор: " + userChoice + "\n" +
      "Выбор компьютера: " + computerChoice + "\n\n" +
      result
  );
}

function gameGRC() {
    const button = document.getElementById('colorBtn');
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    button.addEventListener('click', () => {
      const randomColor = getRandomColor();
      document.body.style.background = randomColor;
    });
}