// Одна из самых популярных на собеседованиях задач.
// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// Пример
// Fizzbuzz(5)
// Результат
// // 1
// // 2
// // fizz
// // 4
// // buzz
// Разбираем задание
// Главное здесь — способ поиска кратных чисел с использованием JavaScript. Его можно реализовать при помощи оператора модуля или же остатка — %, который позволяет показать остаток при делении двух чисел. Если остаток 0, это означает, что первое число кратно второму.
// 12 % 5 // 2 -> 12 is not a multiple of 5
// 12 % 3 // 0 -> 12 is multiple of 3
// Так, если разделить 12 на 5, получаем 2 с остатком 2. Если же разделить 12 на 3, то получаем 4 с остатком 0. В первом случае 12 не кратно 5, во втором — 12 кратно 3.
// Решение
// Оптимальным решением будет следующий код:
// const fizzBuzz = num => {
//   for (let i = 1; i <= num; i += 1) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(fizzBuzz);
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz(5);
