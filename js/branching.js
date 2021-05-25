// Оператор ветвления if

if (5 > 30) { // то,что в скобках выражение приводится к булю,ели true-выполняется тело
    //тело
    console.log('kkkkk')
}
console.log('дальше')

// Оператор ветвления if...else если не выполняется иф,то вып,элс

if (50 > 30) {
    console.log('x > y');
} else {
    console.log('x < y');
}


const salary = 1000;
if (salary < 500) {
    console.log('Уровень 1');
} else if (salary > 500 && salary < 1500) {
    console.log('Уровень 2');
} else if (salary > 1500 && salary < 3000) {
    console.log('Уровень 3');
} else {
    console.log('Уровень 4')
}

//тренарный оператор

const balance = 1000;
// let message;

// if (balance >= 0) {
//     message = 'Позитивный баланс';
// }
// else {
//     message = 'Негативный баланс';
// }


const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';  //это в случае,если 2 варианта
console.log(message);

//Блочная область видимости переменной
const b = 6;

if (true) {
    const a = 5;
}
console.log(a); //видна только в блочной обл.видимости
console.log(b);  //только она видна везде
