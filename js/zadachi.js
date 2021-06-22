// Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'.Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести
// на экран содержимое этой переменной.

// const arr = ['Hello', 'world', '!'];
// const text = arr.join(',');
// console.log(text);

//  Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').

// const array = ['Привет, ', 'мир', '!'];
// array[0] = 'Good bay';
// console.log(array[0] = 'Good bay');
// console.log(array);


// Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.

//Этот объект дан:
// var obj = { 'Коля': '1000', 'Вася': '500', 'Петя': '200' };
// console.log(obj['Коля'], obj['Петя']);

// Задача . Многомерный массив
// Задача. Дан многомерный массив arr:

// var arr = {
// 	'ru':['голубой', 'красный', 'зеленый'],
// 	'en':['blue', 'red', 'green'],
// };
// // Выведите с его помощью слово 'голубой'.

// console.log(arr['ru'][0]);

// Работа с массивами
//  Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.

// const arr = ['a', 'b', 'c'];
// console.log(arr);
// //  С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
// console.log(arr[0]);(arr[0]);
// alert(arr[1]);
// console.log(arr[2]);

// // //  Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
// // const newArr = ['a', 'b', 'c', 'd'];
// //

// // Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// // Результаты сложите, присвойте переменной result.Выведите на экран значение этой переменной.
// const numbers = [2, 5, 3, 9];
// for (const number of numbers) {
//     console.log(number);
// }

// Your task is to make a function that can take any non - negative integer as an argument and return it with its digits in descending order.Essentially, rearrange
// the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


// function descendingOrder(n) {
    
   
//     const numbers = [];
//     numbers.push(n);
//     console.log(Number(numbers.join('').split('').sort().reverse().join('')));

    
//     return Number(numbers.join('').split('').sort().reverse().join(''));
   

   
    

// }



// (descendingOrder(0), 0);
// (descendingOrder(1), 1);
// (descendingOrder(111), 111);
// (descendingOrder(15), 51);
// (descendingOrder(1021), 2110);
// (descendingOrder(123456789), 987654321);

// Description:
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// ===================================================================

// var countSheep = function (num) {
//   //your code here
//   let str = "";
//   for (let i = 1; i <= num; i += 1) {
//     str += ${i} sheep...;
//   }
//   return str;
// };

// console.log(countSheep(1));
// console.log(countSheep(2));
// console.log(countSheep(3));


// Задача 
// Задача.Дан массив с числами.Создайте из него новый массив, где останутся лежать только положительные числа.Создайте для этого вспомогательную функцию isPositive(),
// которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.
    
// const numbers = [12, -36, 14, -5, 62];


// const isPositive = (number) => {
   
//     if (number > 0) {
//         return true;
        
//     } else {
//         return false;
//     }
// };
// const newNumbers = [];
// for (let i = 0; i <= numbers.length; i += 1) {
//     if (isPositive(numbers[i])) {
//         newNumbers.push(numbers[i]);
//     }
    
// }
//   console.log(newNumbers);  


// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
// Если это так - пусть функция возвращает true, если не так - false.


// const isNumberInRange = number => {
//     if (number > 0 && number < 10) {
//         return true;
//     } else {
//         return false;
//        }
//    }

// console.log(isNumberInRange(-45));


