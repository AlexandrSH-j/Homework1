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




// const zd1 =[1, 5, 4, 10, 0, 3];
// for (let i = 0; i < zd1.length; i++) {
//   console.log(zd1[i]);
//   if (zd1[i] === 10) {
//     break;
//   }
// }



// const zd2 = [1, 5, 4, 10, 0, 3];
// let targetIndex = -1;
// for (let i = 0; i < zd2.length; i++) {
//   if (zd2[i] === 4) {
//     targetIndex = i;
//     break;
//   }
// }
// console.log(targetIndex);



// const zd3 = [1, 3, 5, 10, 20];
// const result = zd3.join(' ');
// console.log(result);



// let zd4 = [];
// for (let i = 0; i < 3; i++) {
//     let row = [];
//     for (let j = 0; j < 3; j++) {
//         row.push(1);
//     }
//     zd4.push(row);
// }
// console.log(zd4);



// const zd5 = [1, 1, 1];
// zd5.push(2, 2, 2);
// console.log(zd5);



// let zd6 = [9, 8, 7, 'a', 6, 5];
// zd6.sort((a, b) => a - b);
// zd6 = zd6.filter(item => item !== 'a');
// console.log(zd6);



// const numbers = [9, 8, 7, 6, 5];
// const userNumber = Number(prompt("Угадайте число:"));
// if (numbers.includes(userNumber)) {
//   alert("Угадал");
// } else {
//   alert("Не угадал");
// }



// let zd8 = 'abcdef';
// let zdresult = zd8.split('').reverse().join('');
// console.log(zdresult);



// const zd9 = [[1, 2, 3], [4, 5, 6]];
// const zd9Array = [].concat(...zd9);
// console.log(zd9Array);



// const zd10 = [4, 2, 5, 9, 1, 3, 7, 6, 8, 10];
// for (let i = 0; i < zd10.length; i++) {
//   if (i + 1 < zd10.length) {
//     const sum = zd10[i] + zd10[i + 1];
//     console.log(`Сумма ${zd10[i]} и ${zd10[i + 1]} = ${sum}`);
//   } else {
//     console.log(`У элемента ${zd10[i]} нет следующего элемента.`);
//   }
// }



// function squareArray(arr) {
//   return arr.map(num => num * num);
// }
// const zd11 = [1, 4, 9, 16, 25];
// const squares = squareArray(zd11);
// console.log(squares); 



// const getWordLengths = arr => arr.map(str => str.length);
// const words = ['кот', 'собака', 'дом'];
// const lengths = getWordLengths(words);
// console.log(lengths);



// const zd13 = [5, -3, 0, -8, 2, -1];
// const negativeNumbers = zd13.filter(num => num < 0);
// console.log(negativeNumbers);



// const zd14 = [];
// for (let i = 0; i < 10; i++) {
//     const randomNum = Math.floor(Math.random() * 11);
//     zd14.push(randomNum);
// }
// const evenArray = zd14.filter(num => num % 2 === 0);
// console.log("Исходный массив:", zd14);
// console.log("Массив с четными значениями:", evenArray);



// const zd15 = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
// const sum = zd15.reduce((acc, curr) => acc + curr, 0);
// const average = sum / zd15.length;
// console.log("Массив:", zd15);
// console.log("Среднее арифметическое:", average);
















// function getMin(a, b) {
//   return Math.min(a, b);
// }
// console.log(getMin(8, 4));
// console.log(getMin(6, 6));



// const checkEvenOrOdd = (n) => (n % 2 === 0 ? 'Число четное' : 'Число нечетное');
// console.log(checkEvenOrOdd(20));



// function printSquare(num) {
//   console.log(num * num);
// }
// printSquare(5); 



// function correctAge(age) {
//   let num = Number(age);

//   if (num < 0) {
//     return 'Вы ввели неправильное значение';
//   } else if (num >= 0 && num <= 12) {
//     return 'Привет, друг!';
//   } else {
//     return 'Добро пожаловать!';
//   }
// }
// alert(correctAge(prompt("Сколько вам лет?")));



// function multiplyNumbers(a, b) {
//   if (isNaN(Number(a)) || isNaN(Number(b)) || a === null || b === null || a === '' || b === '') {
//     return 'Одно или оба значения не являются числом';
//   }
//   return Number(a) * Number(b);
// }
// console.log(`Получилось значение - ${multiplyNumbers(14, 22)}`);



// function cubeNumber(input) {
//   if (isNaN(input) || input === null || input === '') {
//     return 'Переданный параметр не является числом';
//   }
//   const n = Number(input);
//   if (isNaN(n)) {
//     return 'Переданный параметр не является числом';
//   }
//   const result = n ** 3;
//   return `n в кубе равняется ${result}`;
// }
// for (let i = 0; i <= 10; i++) {
//   console.log(cubeNumber(i));
// }



// const circle1 = {
//   radius: 5,
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   },
//   getPerimeter() {
//     return 2 * Math.PI * this.radius;
//   }
// };
// const circle2 = {
//   radius: 10,
//   getArea() {
//     return Math.PI * this.radius ** 2;
//   },
//   getPerimeter() {
//     return 2 * Math.PI * this.radius;
//   }
// };
// console.log(circle1.getArea());
// console.log(circle2.getPerimeter());












// for (let i = 0; i < 2; i++) {
//   console.log("Привет");
// }



// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }



// for (let i = 7; i <= 22; i++) {
//   console.log(i);
// }



// const obj = {
//   "Коля": '200',
//   "Вася": '300',
//   "Петя": '400'
// };
// for (let name in obj) {
//   console.log(`"${name}" — зарплата ${obj[name]} долларов`);
// }



// let n = 1000;
// let num = 0;
// while (n >= 50) {
//     n = n / 2; 
//     num++;
// }
// console.log("Полученное число:", n);
// console.log("Количество итераций:", num);




// const firstFriday = 5; 
// for (let day = firstFriday; day <= 31; day += 7) {
//     console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
// }











// // let a = 10;
// // alert(a);
// // a = 20;
// // alert(a);


// // let iphoneYear = 2007;
// // alert ('Год выпуска первого Iphona: ' + (iphoneYear));


// // let nameСreatorJS = "Брендан Эйх";
// // alert ('Имя разработчика JS: ' + (nameСreatorJS));


// // let number1 = 10;
// // let number2 = 2;
// // alert("Сумма: " + (number1 + number2));
// // alert("Разность: " + (number1 - number2));
// // alert("Произведение: " + (number1 * number2));
// // alert("Частное: " + (number1 / number2));


// // let result = 2 ** 5;
// // alert("Результат возведение: " + (result));


// // let numberA = 9;
// // let numberB = 2;
// // alert("Остаток от деление: " + (numberA % numberB));


// // let num = 1;
// // num = num + 5;
// // num = num - 3;
// // num = num * 7;
// // num = num / 3;
// // num = num + 1;
// // num = num - 1;
// // alert(num);


// // let youAge = prompt('Сколько вам лет?');
// // alert(youAge);


// // const user = {
// //     name: "Александр",
// //     age: 28,
// //     isAdmin: true
// // };
// // console.log(user);


// // let youarName = prompt('Какое Ваше имя ?')
// // alert('Привет, ' + (youarName) + '!')







// // let password = '12345';
// // let userInput = prompt('Введите пароль');
// // if (userInput === password) {
// //     alert('Пароль введен верно');
// // } else {
// //     alert('Пароль введен неправильно');
// // }


// // let c = 2; 
// // if (c > 0 && c < 10) {
// //     console.log('Верно');
// // } else {
// //     console.log('Неверно');
// // }


// // let d = 120;
// // let e = 50;
// // if (d > 100 || e > 100) {
// //     console.log('Верно');
// // } else {
// //     console.log('Неверно');
// // }


// // let a = '2';
// // let b = '3';
// // alert(+a + +b);


// // let monthNumber = 12;
// // if (monthNumber < 1 || monthNumber > 12) {
// //     console.log('Ошибка: неверный номер месяца');
// // } else {
// //     switch (monthNumber) {
// //         case 12:
// //         case 1:
// //         case 2:
// //             console.log('Зима');
// //             break;
// //         case 3:
// //         case 4:
// //         case 5:
// //             console.log('Весна');
// //             break;
// //         case 6:
// //         case 7:
// //         case 8:
// //             console.log('Лето');
// //             break;
// //         case 9:
// //         case 10:
// //         case 11:
// //             console.log('Осень');
// //             break;
// //     }
// // }



// // let input = prompt('Пожалуйста, введите любое число');
// // let number = +input;
// // if (isNaN(number) || input === null || input.trim() === '') {
// //     alert('Вы ввели не число. Пожалуйста, обновите страницу и попробуйте снова.');
// // } else {
// //     if (number % 2 === 0) {
// //         alert('Число четное');
// //     } else {
// //         alert('Число нечетное');
// //     }
// // }


// // let clientOS = 0; 
// // if (clientOS === 0) {
// //     console.log('Установите версию приложения для iOS по ссылке');
// // } else if (clientOS === 1) {
// //     console.log('Установите версию приложения для Android по ссылке');
// // } else {
// //     console.log('Неизвестная операционная система');
// // }


// // let clientOS = 0;
// // let clientDeviceYear = 2015; 
// // if (clientDeviceYear < 2015) {
// //     if (clientOS === 0) {
// //         console.log('Установите облегченную версию приложения для iOS по ссылке');
// //     } else {
// //         console.log('Установите облегченную версию приложения для Android по ссылке');
// //     }
// // } else {
// //     if (clientOS === 0) {
// //         console.log('Установите версию приложения для iOS по ссылке');
// //     } else {
// //         console.log('Установите версию приложения для Android по ссылке');
// //     }
// // }





