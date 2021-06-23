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

