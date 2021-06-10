//  Абстрагирование повторения


// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);


// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }
// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(5);
// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2
// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, value => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

              // callback 

// const fnA = function (callback) {
//     // console.log(message);
//     console.log(callback);
//     callback(100);
// };
// const fnB = function (number) {
//     console.log('Этот лог при вызове fnB', number);
// };
// fnA(fnB);

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };
// const add = function (x, y) {
//     return x + y;
// };
// const sub = function (x, y) {
//     return x - y;
// };
// doMath(2, 3, add);
// doMath(10, 8, sub);


// анонимные функции как можно иначе вызвать функцию инлайн фу-я
// doMath(2, 3, function (x, y) {
//     return x + y;
// });



// Отложенный вызов: регистрация событий вешаем слушателя

// const buttonRef = document.querySelector('js-button');
// const handleBtnClick = function () {
//     console.log('клик по кнопке');
// };
// buttonRef.addEventListener('click', handleBtnClick);

// Отложенный вызов : геолокация


// const onGetPositionSuccess = function (position) {
//     console.log(position);
// };
// const onGetPositionError = function (error) {
//     console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

// Если выбираешь получить геопозицию,то успех,если не согласишься-ошибка


             // отложенный вызов : интервалы
// const callback = function () {
//     console.log("Через 2 секунды внутри коллбека в таймауте");
// };
// console.log("в коде перед тайм - аутом");
// setTimeout(callback, 2000);
// console.log("в коде после тайм-аута");  


// *Операция фильтрации ФИЛЬТР ххх

// const filter = function (array, test) {
//     const filteredArray = [];
// for (const el of array) {
//     console.log(el);
//     const passed = test(el);
//     if (passed) {
//         filteredArray.push(el);
//     }
//     }
//     return filteredArray;
// };
// 1.надо передать ф-ю
// 2.фун-я получает элемент массива
// 3.если элемент массива удовлетворяет условию,то ф-я вернет true
// 4.если элемент массива  НЕ удовлетворяет условию,то ф-я вернет false


// const callback1 = function (value) {
//     return value >= 3;
// }
// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], function (value) {
//     return value <= 4;
// });
// console.log(r2); 

//              фрукты  

// const fruits = [
//     { name: 'apple', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
    
// ];
// const filter = function (array, test) {
//     const filteredArray = [];
// for (const el of array) {
//     console.log(el);
//     const passed = test(el);
//     if (passed) {
//         filteredArray.push(el);
//     }
//     }
//     return filteredArray;
// };
// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };
// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);


// хххххххххххххххх   ЗАМЫКАНИЯ   хххххххххххххххххх

// const fnA = function (parametr) {
//     const innerVariable = "значение внутренней переменной функции fnA";
//     const innerFunction = function () {
//         console.log(parametr);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };
//     return innerFunction;
// };
// const fnB = fnA(555);

// fnB();
// console.log(fnB);

// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };
// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     };
//     return makeDish;
// };
// const mango = makeSheff('Mango');


// mango('котлеты');
// mango('пирожок');

// console.dir(mango);

// const poly = makeSheff('Poly');
// poly('tea');
// poly('cupcake');


// ххххххххххххх   ОКРУГЛЯТОР  хххххххххххххххххххх

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));

// const rounder = function (mumber, places) {
//     return Number(number.toFixed(places));
// };



// const rounder = function (places) {
//     return function (number) {
//         return  Number(number.toFixed(places))

//     }  
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4567));
// console.log(rounder2(3.4567));
// console.log(rounder3(5.1234));

//    Зарплата защита данных приватные переменные

// const salaryManagerFactory = function (employeeName, baseSalary) {
//     let salary = baseSalary;

//     const changeBy = function (amount) {
//         salary += amount;
//     };
//     return {
//         raise(amount) {
//             salary += amount;
//         },
    
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зарплата ${employeeName} - ${salary}`;
//         },
//     };
// };
 
               //   Синтаксис стрелочных функций

// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };

// console.log(add(5, 10, 15));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx * /если 2 и больше параметров,скобки обязат.
    // если параметр 1 -не ставим скобки,если параметров нет - пустые скобки
// const addArrow = (a, b, c) => {  
    
//     return a + b + c;
// };

// хххххххххххххххх =====равны нижней (неявный возврат)

    
// ххххххххххххх   как получить доступ ко всем аргументам ххх

//     const addArrow = (...args) => {  
//     console.log(args);
//     // return a + b + c;
// };
// console.log(addArrow(15, 52, 12));


// const fnA = function () {
//     return {
//         a: 5,
//     };
// };
// console.log(fnA);
//     // Перепишем на стрелку
// const arrowFnA = () => {
//     return {
//         arrowA: 5,
//     };
// };
// если не нужен явный ретерн и у нас ОБЪЕКТ в теле ф-ии, пишем только так
// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA);


