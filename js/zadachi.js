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

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

// function list(people){
//  const names = people.map(({ name }) => name);
//     const finalName = names.pop();

//     return names.length
//         ? names.join(', ') + ' & ' + finalName
//         : finalName || '';
// }

// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));   //'Bart, Lisa, Maggie, Homer & Marge',"Must work with many names")
// console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])); //'Bart, Lisa & Maggie',"Must work with many names"
// console.log(list([{name: 'Bart'},{name: 'Lisa'}])); // ( 'Bart & Lisa', "Must work with two names")
// console.log(list([{name: 'Bart'}])) //('Bart', "Wrong output for a single name")
// console.log((list([])));  // '', "Must work with no names"

// const mySet = new Set([{ a: 1 }, { a: 1 }]);
// const result = [...mySet];
// console.log(result);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//     function uniqueInOrder(iterable) {
//   //your code here - remember iterable can be a string or an array
//   const result = []

//   for(let i = 0; i < iterable.length; i++){
//     if(iterable[i] !== iterable[i + 1]){
//       result.push(iterable[i])
//     }
//   }

//   return result
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB')); //['A','B','C','D','A','B'];

// const fn = function () {
//   console.log("result");
// };
// const fnA = fn(); // undefined
// console.log(fnA);

// // Почему функция fn сама исполняется(в консоли написана лишь строка, где return console.log('result');
// // и нет места вызова fn), и почему console.log(fnA) - undefind

// 1) Написать ф - ю конструктор которая создает обект person с такими ключами
// const person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить строку Привет {имя} мне {возраст} лет. Мне нравится {интерес}
//   },
//   greeting() {
//     // Привет, я {имя}
//   },
// };

// function Person(firstName, lastName, age, gender, interests) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.greeting = function () {
//     console.log(`Привет я ${this.firstName} ${this.lastName}`);
//   };
//   this.bio = function () {
//     console.log(
//       `Привет ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interests}`
//     );
//   };
// }

// function Person(config) {}

// function Person({ firstName, lastName, age, gender, interests }) {
//   //   this = {}
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.greeting = function () {
//     console.log(`Привет я ${this.firstName} ${this.lastName}`);
//   };
//   this.bio = function () {
//     console.log(
//       `Привет ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interests}`
//     );
//   };
//   // return this
// }

// function Person(obj) {
//   //   this = {}
//   const { firstName, lastName, age, gender, interests } = obj;
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   // return this
// }

// // console.log(`Person`, Person.prototype);

// Person.prototype.greeting = function () {
//   console.log(`Привет я ${this.firstName} ${this.lastName}`);
// };

// Person.prototype.bio = function () {
//   console.log(
//     `Привет ${this.firstName} мне ${this.age} лет. Мне нравится ${this.interests}`
//   );
// };

// const user = new Person({
//   firstName: "Bob",
//   lastName: "Dou",
//   age: 21,
//   gender: "male",
//   interests: "football",
// });
// console.log(Person.prototype);

// const user2 = new Person({
//   firstName: "Jack",
//   lastName: "Dou",
//   age: 35,
//   gender: "male",
//   interests: "basketball",
// });

// ххххххххххххххххххххххххххххххххххххххххххххххххххх
//     Complete the square sum function so that it squares each number passed into it and then sums the results together.

// function squareSum(numbers){
//     const totalNumber = numbers.map(number => Math.pow(number, 2)).reduce((total, number) => total + number, 0);
//     return totalNumber;

//     };

// console.log(squareSum([1,2])); //5)
// console.log(squareSum([0, 3, 4, 5])); //50)

// ххххххххххххххххххххххххххххххххххх

// Welcome.In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num) {
//     return +num.toString().split('').map(value => Math.pow(value, 2)).join('');

// }
// console.log(squareDigits(3212));// 9414
// console.log(squareDigits(2112));//4114
// console.log(squareDigits(0));// 0

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle(starting at index 1) e.g.:
// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...

// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
// }

// console.log(rowSumOddNumbers(1));  //1);
// console.log(rowSumOddNumbers(42));// 74088);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Ask a small girl - "How old are you?". She always says strange things... Lets help her!

// For correct answer program should return int from 0 to 9.

// Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

// function getAge(inputString) {
//     // return correct age (int). Happy coding :slight_smile:

//     return Number(inputString.split("")[0]);
// }

// console.log(getAge("4 years old")); //4

// ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх

// Let's play! You have to return which player won!
//  In case of a draw return Draw!.

// const rps = (p1, p2) => {
//     if (p1 == "rock" && p2 == "scissors") {
//         return "Player 1 won!";
//     } else if (p1 == "scissors" && p2 == "paper") {
//         return "Player 1 won!";
//     } else if (p1 == "paper" && p2 == "rock") {
//         return "Player 1 won!";
//     } else if (p2 == "rock" && p1 == "scissors") {
//         return "Player 2 won!";
//     } else if (p2 == "scissors" && p1 == "paper") {
//         return "Player 2 won!";
//     } else if (p2 == "paper" && p1 == "rock") {
//         return "Player 2 won!";
//     } else {
//         return "Draw!";
//     }
// };

// console.log(rps("rock", "scissors"));
// console.log(rps("scissors", "paper")); //( getMsg(1));
// console.log(rps("paper", "rock")); // getMsg(1)

// console.log(rps("scissors", "rock")); //getMsg(2);
// //   (rps('paper', 'scissors'), getMsg(2));
// //   (rps('rock', 'paper'), getMsg(2));

// console.log(rps("rock", "rock")); //'Draw!;
// //   (rps('scissors', 'scissors'), 'Draw!');
// //   (rps('paper', 'paper'), 'Draw!');
// console.log(rps("mango", "papper")); // Draw!

// хххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = (n) => {
//     const num = [];

//     for (let i = 1; i <= n; i += 1) {
//         num.push(i);

//         //   console.log(i);
//     }

//     return num.reverse();
// };

// console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]

// ххххххххххххххххххххххххххххххххххххххххх

// function removeChar(str) {
//     //You got this!

//     console.log(str.slice(1, -1));
//     return str.slice(1, -1);

// };

// removeChar('eloquent');// 'loquen');
// removeChar('country');// 'ountr');
// removeChar('person');// 'erso');
// removeChar('place');// 'lac');
// removeChar('ooopsss');// 'oopss');

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // Take 2 strings s1 and s2 including only letters from a to z.Return a new sorted string, the longest possible,
// //     containing distinct letters - each taken only once - coming from s1 or s2.

// function longest(s1, s2) {
//     const strArr = s1.split('');
//     const strArr1 = s2.split('')
//     return [...strArr, ...strArr1].sort().filter((el, index, array) => array.indexOf(el) === index).join('')

// }

// longest("aretheyhere", "yestheyarehere");// "aehrsty")
// longest("loopingisfunbutdangerous", "lessdangerousthancoding");// "abcdefghilnoprstu")
// longest("inmanylanguages", "theresapairoffunctions");// "acefghilmnoprstuy")

// xxxxxxxxxxxxxxxxxxxxxxx  or xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// function longest(s1, s2) {
//     let str = new Set([...s1, ...s2]);
//     return [...str].sort().join('');
// }

// хххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// function validatePIN(pin) {
//     //return true or false

//     return /(^\d{4}$)|(^\d{6}$)/.test(pin);
// }

// console.log(validatePIN("1234")); //true, "Wrong output for '1234'");
// console.log(validatePIN("1234567")); //false, "Wrong output for '1234567'")
// console.log(validatePIN("-1.234")); //false, "Wrong output for '-1.234'")

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// function digital_root(n) {
//   // console.log(String(n).split('').reduce((acc, el) => +acc + + el));
//   const number = String(n)
//     .split('')
//     .reduce((acc, el) => +acc + +el, 0);
//   //   console.log(number);
//   let sum = 0;

//   if (number > 9) {
//     sum = String(number)
//       .split('')
//       .reduce((acc, el) => +acc + +el, 0);
//     return +sum;
//   } else {
//     return +number;
//   }
// }

// // const digital_root = n => {
// //   return n !== 0 && n % 9 === 0 ? 9 : n % 9;
// // };

// console.log(digital_root(16)); //7 ) 16  -->  1 + 6 = 7
// console.log(digital_root(456)); // 6  )942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// console.log(digital_root(228));
// console.log(digital_root(0));

// ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// function getSum( a,b ) {
//     let lower, higher;
//     let result = 0;
//     //return either of it if they are equal
//     if(a == b) {
//         return a;
//     } else {
//         if(a > b) {
//             higher = a;
//             lower = b;
//         } else {
//             higher = b;
//             lower = a;
//         }
//         for(i = lower; i <= higher; i++) {
//             result += i;
//         }
//     }
//     return result;

// };

// console.log(getSum(0,-1)); //-1);
// console.log(getSum(0,1)); //1);

// console.log(getSum(-1,3)); //5);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []

// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums(or its variants in other languages) will take as parameter a list ls and
// return a list of the sums of its parts as defined above.

// function partsSums(ls) {
//   ls.unshift(0);
//   let sum = ls.reduce((p, c) => p + c, 0);

//   return ls.map(v => (sum = sum - v));
// }

// console.log(partsSums([0]));
// console.log(partsSums([20, 20, 19, 16, 10, 0]));
// console.log(partsSums([21, 20, 18, 15, 11, 6, 0]));
// console.log(
//   partsSums([
//     10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270,
//     2581057, 2580168, 2579358, 0,
//   ]),
// );

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// You are given an array(which will have a length of at least 3, but could be very large) containing integers.The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.Write a method that takes the array
// as an argument and returns this "outlier" N.

// function findOutlier(integers) {
//   const oddArray = [];
//   const evenArray = [];
//   for (let integer of integers) {
//     if (integer % 2 === 0) {
//       evenArray.push(integer);
//     } else {
//       oddArray.push(integer);
//     }
//   }
//   return oddArray.length === 1 ? oddArray[0] : evenArray[0];
// }
// console.log(findOutlier([0, 1, 2])); //, 1)
// console.log(findOutlier([1, 2, 3])); // 2)
// console.log(findOutlier([2, 6, 8, 10, 3])); //3)
// console.log(findOutlier([0, 0, 3, 0, 0])); // 3,
// console.log(findOutlier([1, 1, 0, 1, 1])); //0);

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function () {
//       return this.name;
//     };
//   }
//   const declareWinner = (fighter1, fighter2, firstAttacker) => {
//     const a = [fighter1, fighter2].find((v) => v.name === firstAttacker);
//     const b = [fighter1, fighter2].find((v) => v.name !== firstAttacker);

//     return Math.ceil(b.health / a.damagePerAttack) <= Math.ceil(a.health / b.damagePerAttack) ? a.name : b.name;
//   };

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// всім перші букви перевести у верхній регістр
// String.prototype.toJadenCase = function () {
//     return this.split(" ")
//         .map(function (word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//         })
//         .join(" ");
// }
// var str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase())

// ххххххххххххххххххххххххххххххххххххх

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, function should returns 0

// const sequenceSum = (begin, end, step) => {
//   let total = 0;
//   for (let i = begin; i <= end; i += step) {
//     if (begin > end) {
//       return 0;
//     } else {
//       total += i;
//     }
//   }
//   return total;
// };

// console.log(sequenceSum(2, 2, 2)); //2
// console.log(sequenceSum(2, 6, 2)); //12
// console.log(sequenceSum(1, 5, 1)); //15
// console.log(sequenceSum(1, 5, 3)); //5
// console.log(sequenceSum(5, 0, 3)); //0

// xxxxxxxxxxxxxxxxxxxxxxxxxx

// // Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

// function sumDigits(number) {
//   return Math.abs(number)
//     .toString()
//     .split("")
//     .reduce((acc, total) => +acc + +total, 0);
// }

// console.log(sumDigits(10)); //1
// console.log(sumDigits(99)); //18
// console.log(sumDigits(-32)); //5
// console.log(sumDigits(256)); //

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// function getDivisorsCnt(n) {
//   let cnt = 0;
//   for (let i = 1; i <= n; i++) {
//     if (!(n % i)) cnt += 1;
//   }
//   return cnt;
// }
// console.log(getDivisorsCnt(4)); //
// console.log(getDivisorsCnt(5));
// console.log(getDivisorsCnt(12));
// console.log(getDivisorsCnt(30));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // Given an integer as input, can you round it to the
// // next (meaning, "higher") multiple of 5?

// // Учитывая целое число в качестве входных данных,
// //  можете ли вы округлить его до следующего
// //   (то есть «большего») кратного 5?

// function roundToNext5(n) {
//   return Math.ceil(n / 5) * 5;
// }

// console.log(roundToNext5(2)); //5
// console.log(roundToNext5(3)); //5
// console.log(roundToNext5(-2)); //0
// console.log(roundToNext5(-5)); //-5
// console.log(roundToNext5(30)); //30
// console.log(roundToNext5(21)); //25

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// function sortByLength(array) {
//   // Return an array containing the same strings, ordered from shortest to longest

//   return array.sort((a, b) => a.length - b.length);
// }

// console.log(sortByLength(['Beg', 'Life', 'I', 'To'])); //["I", "To", "Beg", "Life"]
// console.log(sortByLength(['', 'Moderately', 'Brains', 'Pizza'])); // ["", "Pizza", "Brains", "Moderately"]
// console.log(sortByLength(['Longer', 'Longest', 'Short'])); // ["Short", "Longer", "Longest"]

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// //* Your task is to write function findSum.
// // Upto and including n, this function will return the sum of all multiples of 3 and 5.
// // For example:
// // findSum(5) should return 8 (3 + 5)
// // findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// function findSum(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(findSum(5)); //8
// console.log(findSum(10)); //33

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx;

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// function arithmetic(a, b, operator) {
//   if (operator === "add") {
//     return a + b;
//   }

//   if (operator === "subtract") {
//     return a - b;
//   }

//   if (operator === "multiply") {
//     return a * b;
//   }

//   if (operator === "divide") {
//     return a / b;
//   }
// }

// function arithmetic(a, b, operator){
//     switch(operator) {
//       case 'add':
//         return a + b;
//       case 'subtract':
//         return a - b;
//       case 'multiply':
//         return a * b;
//       case 'divide':
//         return a / b;
//     }
//   }

// console.log(arithmetic(1, 2, "add")); //3
// console.log(arithmetic(8, 2, "subtract")); //6
// console.log(arithmetic(5, 2, "multiply")); //10
// console.log(arithmetic(8, 2, "divide")); //4

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// // Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// // Учитывая список цифр, верните наименьшее число, которое может быть образовано из этих цифр, используя цифры только один раз (игнорируйте дубликаты).

// function minValue(values){
//     const num = [...values].sort().filter((val, index,array)=>array.indexOf(val) ===index).join``
//     return Number(num)
// }

//   console.log(minValue([1, 3, 1])) //13);
//   console.log(minValue([4, 7, 5, 7])) //457);
//   console.log(minValue([4, 8, 1, 4])) //148);
//   console.log(minValue([5, 7, 9, 5, 7])) // 579);
//   console.log(minValue([6, 7, 8, 7, 6, 6])) //678);
//   console.log(minValue([5, 6, 9, 9, 7, 6, 4])) // 45679);
//   console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])) // 134679);
//   console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])) // 356789);
//   console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // 1);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// Тролли атакуют ваш раздел комментариев!

// Обычный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.

// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.

// Например, строка «Этот сайт для неудачников LOL!» станет "Ths wbst s fr lsrs LL!".

// Примечание: для этого ката y не считается гласным.

// function disemvowel(str) {
//     return str.split('').filter(val=> !(/^[aeiou]$/i).test(val)).join``
//   }

// ===2 variant===

// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
//   }

//   console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!")
//   console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//   console.log(disemvowel("What are you, a communist?")) // "Wht r y,  cmmnst?")

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// function rowWeights(array) {

//     let t1 = 0;
//     let t2 = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (i % 2 === 0) {
//         t1 += array[i];
//       } else {
//         t2 += array[i];
//       }
//     }
//     return [t1, t2];
//   }

// ==rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])==

// console.log(rowWeights([80])); // [80,0]);
// console.log(rowWeights([100, 50])); // [100,50]);
// console.log(rowWeights([50, 60, 70, 80])); // [120,140]);
// console.log(rowWeights([13, 27, 49])); // [62,27]);
// console.log(rowWeights([70, 58, 75, 34, 91])); // [236,92]);
// console.log(rowWeights([29, 83, 67, 53, 19, 28, 96])); // [211,164]);
// console.log(rowWeights([0])); // [0,0]);
// console.log(rowWeights([100, 51, 50, 100])); // [150,151]);
// console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])); // [207,235]);
// console.log(rowWeights([0, 1, 0])); // [0,1]);

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// function solution(str, ending){
//  // Первое решение
// return str.indexOf(ending, str.length - ending.length) !== -1;
// // второе решение
// return str.endsWith(ending);

// }

// console.log(solution('abcde', 'cde')); // true
// console.log(solution('abcde', 'abc')); // false
// console.log(solution('sumo', 'omo')); // false
