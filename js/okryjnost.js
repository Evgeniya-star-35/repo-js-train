// const PI = 3.14159265359;
// // const circleLength = radius => {
// //   return 2 * Math.PI * radius;
// // };
// // or
// const circleLength = radius => {
//   return PI * radius ** 2;
// };
// console.log(circleLength(5));
// console.log(circleLength(12));
// задача:
// Функция circleLength должна возвращать длину круга с учетом радиуса<--- Вот єтот вопрос надо решить
// let b = 20;

// if (true) {
//   console.log(b);
//   let b = 10;
// }

// const person = {
//   firstName: 'bob',
//   showName() {
//     console.log(this.firstName);
//   },
// };

// const foo = function (callback) {
//   callback();
// };

// foo.bind(person.showName);
// const person = {
//   age: 10,
//   setAge(newAge) {
//     this.age = newAge;
//   },
//   refreshAge(userId) {
//     fetchAgeFromDb(function (newAge) {
//       this.setAge(newAge);
//     });
//   },
// };

// function fetchAgeFromDb(cb) {
//   cb(20);
// }

// person.refreshAge();
// console.log(person.age);
// const add = (a = 0, b = 10) => a + b;
// const sum = add(10);
// console.log(sum);
// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
// const answer = sum(1, 5, 20, 10);
// console.log(answer);

const multiplyByValue = (value, base, ...numbers) => {
  return numbers.map(number => number * value + base);
};
console.log(multiplyByValue(2, 100, 1, 5, 20, 10));
