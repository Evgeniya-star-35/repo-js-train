const PI = 3.14159265359;
// const circleLength = radius => {
//   return 2 * Math.PI * radius;
// };
// or
const circleLength = radius => {
  return PI * radius ** 2;
};
console.log(circleLength(5));
console.log(circleLength(12));
// задача:
// Функция circleLength должна возвращать длину круга с учетом радиуса<--- Вот єтот вопрос надо решить
let b = 20;

if (true) {
  console.log(b);
  let b = 10;
}