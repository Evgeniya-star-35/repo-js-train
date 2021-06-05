// TASK 1
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// TASK 1
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// const pow = function (x, n) {
//   return Math.pow(x, n);
// };
// console.log(pow(2, 4));
// ==========
// TASK 2
// напиши функцию которая будет суммировать соседние числа и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const addNumbers = function (numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 2) {
//     numbers[i] += numbers[i + 1];
//     newNumbers.push(numbers[i]);
//   }
//   return newNumbers;
// };

// console.log(addNumbers([22, 11, 34, 5, 12, 13, 14, 15]));



// const addNumbers = function (numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 2) {
//     numbers[i] += numbers[i + 1];
//     newNumbers.push(numbers[i]);
//   }
//   return newNumbers;
// };

// console.log(addNumbers([22, 11, 34, 5, 12, 13, 14, 15]));

// TASK 3
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9];

// const addNewArr = function (array) {
//   const newArray = [];
//   for (let elem of array) {
//     if (elem % Math.sqrt(elem) === 0) {
//       newArray.push(Math.sqrt(elem));
//     }
//   }
//   return newArray;
// }
// console.log(addNewArr(arr));

// TASK 6

// даны 2 массива
// const nums = [1, "b", 3, "d", 5];
// const strs = ["a", 2, "c", 4, "e"];

// Напишите функцию которая будет принимать 2 массива в качестве аргументов
// и вернет новый массив ['1a', '2b', '3c', '4d', '5e']

// const array = (array1, array2) => {
//   const res = [];
//   for (let i = 1; i < array1.length; i += 1) {
//     typeof array1[i] === "number"
//       ? res.push(array1[i] + array2[i])
//       : res.push(array2[i] + array1[i]);
// )
// return res;
//   };
// console.log(array(nums, strs));

// const tryThis = [
//     [23, 11, ["hello", "world", "Vasya"]],
//     "some str",
//     [777, "word", ["Привет", ["как сюда добраться"]]],
//   ];

//   const newTryThis = tryThis.flat(Infinity);

//   console.log(newTryThis);
//   console.log(newTryThis.join(' ').split(' '));