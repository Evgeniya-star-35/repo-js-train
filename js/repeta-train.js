//xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  calculateTolalPrice  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/*Напиши функцию calculateTotalPrice(items) которая принимает массив цен(чисел) и возр,их сумму*/

// const calculateTotalPrice = function (items) {
//     let total = 0;
//     for (const item of items) {
//         total += item;
        
//     }
//     return total;
// }
// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxx напиши ф-ию logItems (items) для пребора и логирования массива   xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }
// logItems(['Mango', 'Kivi']); єта ф-ия ничего не возвращает просто получает массив и логирует в консоль

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxx тема Объекты   xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log('Key: ', key);
// }

/*
 * Key: name
 * Key: stars
 * Key: capacity
 */
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log('Value: ', hotel[key]);
// }

/*
 * Value: "Resort Hotel"
 * Value: 5
 * Value: 100
 */

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]


// xxxxxxxxxxxxСкомбинировав результат Object.keys() и цикл for...of мы можем перебрать объект. На самом деле мы перебираем массив ключей, а потом просто обращаемся к свойству объекта с таким ключом.xxx


// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]

// for (const key of keys) {
//   console.log('Value: ', hotel[key]);
// }
/*
 * Value: Resort Hotel
 * Value: 5
 * Value: 100
 */


// xxxxxxxxxxxx А можно использовать результат Object.entries(), который вернет массив записей с ключами и значениями свойств объекта.xxxx
const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
// const entries = Object.entries(hotel);

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */

// xxxxxxxxxxxx Допустим перед нами стоит задача посчитать общее количество продуктов в объекте формата имя-продукта: количество. Тогда подойдет метод Object.values() для того, чтобы получить массив всех значений и потом удобно их сложить.xx

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// / xxxxxxxxxxxx
