let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:' ,elementWidth);

// const result = Number.parseInt(elementWidth);
// console.log(result);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight: ', elementHeight);

let salary = 1300.16472;

salary = Number(salary.toFixed(2));
console.log(salary);

let quantity = '30';
let value = 'Эту строку невозможно привести к числу';
console.log(Number(quantity));


// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);   /*возведение в степень*/
console.log(2**3);  /*exponenta */

/*напиши скрипт который просит пользователя ввести число и степень,
*возводит число в эту степень и выводит результат в консоль*/

//1.попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// 2.попросить ввести степень и сохранить в переменную
// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);
// 3. возвести введенные данные в степень и вывести
// const result = base ** power;
// console.log(result);

/*генерим псевдослучайные числа*/
// Math.round округляет числа
const max = 50;
const min = 30;
const result = Math.round(Math.random() * (max - min) + min);
console.log(result);

// Math.random() * (max  - min) + min