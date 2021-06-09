// let result = 0.1 + 0.2;
// console.log(result);
// console.log(Math.floor) // кругляет в меньшую сторону и дает только целую часть(0)
// console.log(Math.ceil) //округляет к большему (1)
// console.log(Math.random)
// console.log(result.toFixed(1)); //получаем 0.3 лучше использовать с дробніми числами!!!


// let name = 'Bob';
// let sliceName = name.slice(0, 1); //первой указіваем букву,с которой начинаем работать, а второй -индекс,на кот-м мі заканчиваем,и он не попадает в финальній рез-т
// console.log(name);
// console.log(sliceName)

///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxbiggestNumberxxxxxxxxxxxxxxxxxxxxx
// const numbers = [89, 52, 63, 48, 120, 11, 22];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('smallestNumber: ' , smallestNumber);

///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx spred-operator разбивает массив поэлементно и по очереди вставляет внутрь другого массива xxxxxxxxxxxxxxxxxxxxx
// const newClients = ['monkong', 'singu'];
// const oldClients = ['mango', 'ajax', 'poly', ...newClients, 'kiwi'];
// console.log(oldClients);
// можно ...переменную с массивом вставлять в любое место массива,в который мы вставляем!


///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  метод slice xxxxxxxxxxxxxxxxxxxxx

// const numbers = [7, 3, 8, 9, 2];
// console.log(numbers.slice(3));
// console.log(numbers);

///xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   базовые операции с массивом xxxxxxxxxxxxxxxxxxxxx

// создайте массив styles с элементами "джаз" и "блюз"
// добавьте "Рок-н-ролл" в конец. 
// замените значение в середине на "классика"
// удалите первый элемент и выведите его в консоль
// вставьте "рэп" и "регги" в начало массива
// массив по ходу выполнения операций:
// Джаз,Блюз
// Джаз,Блюз,Рок-н-ролл
//  Джаз,Классика,Рок-н-ролл
// классика, рок-н-ролл  
// рэп, реггби, классика, рок-н-ролл

// const styles = ["джаз", "блюз"];
// styles.push("Рок-н-ролл");
// styles.splice(1, 1, "классика");
// // styles[1] = "классика";
// const deletedStyles = styles.shift(); /*создаем переменную,если надо потом удаленный элемент использовать дальше*/

// console.log(deletedStyles);
// styles.unshift("рэп", "регги");
// console.log(styles);

///xxxxxxxxxxxxxxx цикл for xxxxxxxxxxxxxxxx
// напиши функцию,которая получает массив и использует цикл фор,который для каждого
//элемента будет выводить в консоль сообщение в формате номер элемента-значение элемента
// нумерация элементов должна начинаться с единицы.
// напиши код,который ищет самое маленькое число в массиве
 
// const users = ['Mango', 'Poly', 'Ajax'];
// for (let i = 0; i < users.length; i += 1) {
//     console.log('index', i);
//     console.log('value', users[i]);
// }
// // xxx or xxx
// for (let user of users) {
//     console.log('index', users.indexOf(user));
//     console.log(user);
// }
///xxxxxxxxxxxxxxx является ли строка полиндромом xxxxxxxxxxxxxxxx

// const str = 'довод';
// const newString = 'Hello';
// 1.сделать из строки массив
// 2.перевернуть массив наоборот.
// 3.сравнить 2 строки

// const array = str.split('');
// array.reverse();
// const reverseString = array.join('');
// console.log(str === reverseString);
// xxxxxxxxxx или xxxxxxxxxxxxxxxxx
// const reverseStringWithChaining = str.split('').reverse().join('');
// console.log(str === reverseStringWithChaining);

            // Задача 3
// 3) Напишите ф - цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня.
// Ф - ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
// ];
// function calcTotalPrice(stones, stoneName) {
//   let total = 0;
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//      return total += stone.price * stone.quantity;
// }
    
//   }
// }
// console.log(`result`, calcTotalPrice(stones, "Бриллиант")); // 8100