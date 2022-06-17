console.log('Lab 7');

//---------- Завдання №1 ----------//
//1. Написати функцію з одним аргументом, яка перевіряє чи є аргумент числом. Якщо так, то повертає чи є це цисло парним чи не парним. Якщо аргумент не число - повертає пусту строку.
function checkNum(argument) {
    if (typeof argument == 'number') {
        if (argument % 2 == 0) {
            return `Число ${argument} парне`;
        }
        if (argument % 2 == 1) {
            return `Число ${argument} непарне`;
        }
        return `Число ${argument} не є цілим числом`;
    }
    return `${argument} не є числом`;
}
let example = 30;
console.log(checkNum(example));

//---------- Завдання №2 ----------//
//2. Написати функцію, яка починає перебирати числа від 1 до нескінченності і перевіряє чи є число простим (просте число - те яке ділиться лише на 1 чи само на себе). Якщо просто число знайдене - воно додається до масиву. Після пʼятого знайденого простого числа функція повинна повернути суму всіх пʼяти простих чисел в масиві.
function findSimpleNumbers() {
    let arr = [];
    let sum = 0;
    firstFor: for (let i = 1; i < Infinity; i++) {
        for (let n = 2; n < i; n++) {
            if (i % n == 0) continue firstFor;
        }
        arr.push(i);
        if (arr.length == 5) {
            for (let item of arr) {
                sum += item;
            }
            return sum;
        }
    }
}
console.log('Сума перших 5 простих чисел:', findSimpleNumbers());

//---------- Завдання №3 ----------//
//3. Написати функцію з одним аргументом n, що є числом. Функція повинна повернути суму наступного ряду з n чисел 1 + 11 + 111 + 1111 + ...., де кожний елемент - число з постійно зростаючою кількістю одиниць.
function calcSum(n) {
    let num = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        num += Math.pow(10, i - 1);
        sum += num;
    }
    return sum;
}

let number = 12;
console.log(calcSum(number));