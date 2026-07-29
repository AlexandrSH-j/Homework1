function getMin(a, b) {
  return Math.min(a, b);
}
console.log(getMin(8, 4));
console.log(getMin(6, 6));



const checkEvenOrOdd = (n) => (n % 2 === 0 ? 'Число четное' : 'Число нечетное');
console.log(checkEvenOrOdd(20));



function printSquare(num) {
  console.log(num * num);
}
printSquare(5); 



function correctAge(age) {
  let num = Number(age);

  if (num < 0) {
    return 'Вы ввели неправильное значение';
  } else if (num >= 0 && num <= 12) {
    return 'Привет, друг!';
  } else {
    return 'Добро пожаловать!';
  }
}
alert(correctAge(prompt("Сколько вам лет?")));



function multiplyNumbers(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b)) || a === null || b === null || a === '' || b === '') {
    return 'Одно или оба значения не являются числом';
  }
  return Number(a) * Number(b);
}
console.log(`Получилось значение - ${multiplyNumbers(14, 22)}`);



function cubeNumber(input) {
  if (isNaN(input) || input === null || input === '') {
    return 'Переданный параметр не является числом';
  }
  const n = Number(input);
  if (isNaN(n)) {
    return 'Переданный параметр не является числом';
  }
  const result = n ** 3;
  return `n в кубе равняется ${result}`;
}
for (let i = 0; i <= 10; i++) {
  console.log(cubeNumber(i));
}



const circle1 = {
  radius: 5,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};
const circle2 = {
  radius: 10,
  getArea() {
    return Math.PI * this.radius ** 2;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};
console.log(circle1.getArea());
console.log(circle2.getPerimeter());












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





