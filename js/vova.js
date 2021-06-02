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