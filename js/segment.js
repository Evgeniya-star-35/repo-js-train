// напиши скрипт,который проверяет вхождение числа в отрезок х1 и х2
// до х1
// после х2
//от х1 до х2
//до х1 или после х2

const x1 = 10;
const x2 = 30;
const number = 2;

console.log('Число ${number} попадает в отрезок до ${x1}?', number < x1);

console.log('Число ${number} попадает в отрезок после ${x2}?', number > x2)

console.log('Число ${number} попадает в отрезок после ${x1} && до ${x2}?', number > x1 && number < x2);

console.log('Число ${number} попадает в отрезок до ${x1} || после ${x2}?', number < x1 || number > x2)