// let a = 10;
// alert(a);
// a = 20;
// alert(a);


// let iphoneYear = 2007;
// alert ('Год выпуска первого Iphona: ' + (iphoneYear));


// let nameСreatorJS = "Брендан Эйх";
// alert ('Имя разработчика JS: ' + (nameСreatorJS));


// let number1 = 10;
// let number2 = 2;
// alert("Сумма: " + (number1 + number2));
// alert("Разность: " + (number1 - number2));
// alert("Произведение: " + (number1 * number2));
// alert("Частное: " + (number1 / number2));


// let result = 2 ** 5;
// alert("Результат возведение: " + (result));


// let numberA = 9;
// let numberB = 2;
// alert("Остаток от деление: " + (numberA % numberB));


// let num = 1;
// num = num + 5;
// num = num - 3;
// num = num * 7;
// num = num / 3;
// num = num + 1;
// num = num - 1;
// alert(num);


// let youAge = prompt('Сколько вам лет?');
// alert(youAge);


// const user = {
//     name: "Александр",
//     age: 28,
//     isAdmin: true
// };
// console.log(user);


// let youarName = prompt('Какое Ваше имя ?')
// alert('Привет, ' + (youarName) + '!')







let password = '12345';
let userInput = prompt('Введите пароль');
if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


let c = 2; 
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


let d = 120;
let e = 50;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


let a = '2';
let b = '3';
alert(+a + +b);


let monthNumber = 12;
if (monthNumber < 1 || monthNumber > 12) {
    console.log('Ошибка: неверный номер месяца');
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
    }
}



let input = prompt('Пожалуйста, введите любое число');
let number = +input;
if (isNaN(number) || input === null || input.trim() === '') {
    alert('Вы ввели не число. Пожалуйста, обновите страницу и попробуйте снова.');
} else {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}


let clientOS = 0; 
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Неизвестная операционная система');
}


let clientOS = 0;
let clientDeviceYear = 2015; 
if (clientDeviceYear < 2015) {
    if (clientOS === 0) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
} else {
    if (clientOS === 0) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else {
        console.log('Установите версию приложения для Android по ссылке');
    }
}





