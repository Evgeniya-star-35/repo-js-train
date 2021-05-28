// Напиши скрипт который подсчитывает общую сумму зарплат работников.
 // Кол-во работников хранится в перемнной employees.
 //Зарплата каждого работника это случайное число от 500 до 5000
 //Записать сумму в переменную totalSalary и вывести в консоль
 //

//  1 сделать вары
const minSalary = 500;
const maxSalary = 5000;
const employees = 12;
let totalSalary = 0;

// // 2 перебрать работников в цикле
for (let i = 1; i <= employees; i += 1) {
    //   // 3 сгенерить случайную зп
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
 
    

    console.log(`ЗП работника номер ${i} - ${salary}`);

    //   // 4  прибавить к тоталу
    totalSalary += salary;
    // }

    // // 5 лог
    console.log('totalSalary: ', totalSalary);
}
// Написать программу которая конвертирует минуты в формат HH:MM

//  70 покажет 01:10
// 450 покажет 07:30
//  1441 покажет 24:1

// 5
// [23:02]

// 1. если ведено число 70, то выводим 1.10
// 2. если введено число 450, то покажет 7.30
// 3.если число 1441,то выводим 24.1
// 4.если число 1382 ,то 23.02

// let number = Number(prompt('Введите число'));

// if (number = 70 ) {
//     console.log('1:10');

//  } else if (number = 450) {
//     console.log('7:30');
//  } else if (number = 1441) {
//     console.log('24:01');
//  } else if (number = 1382) {
//     console.log('23:02');
// }
 


// for (let i = 0; i <= 1441; i += 1) {
//    let hour = i / 60;
//    let minutes = i % 60;
//    if (i === 70) {

//       console.log(Now ${ Math.floor(hour) }: ${ minutes });

//    } else if (i === 450) {
//       console.log(Now ${ Math.floor(hour) }: ${ minutes });

//    } else if (i === 1441) {
//       console.log(Now ${ Math.floor(hour) }: ${ minutes });
//       break;
//    }
// }
