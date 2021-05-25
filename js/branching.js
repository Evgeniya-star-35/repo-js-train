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

//