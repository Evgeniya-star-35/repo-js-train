const message = 'В этой строке 26 символов.';
console.log(message.length);


//конкатенация строк
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

/* Напиши скрипт,который выведет строку в формате 
* "Гость х у поселяется в z номере q",
*подставив вместо х у z q значения переменных
*/
const room = 716;
const type = 'VIP';

const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номере ${room}`;
console.log(welcomeMsg);


// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' ' + 'поселяется в' + ' ' + type + ' ' + 'номер' + ' ' + room;
// console.log(welcomeMsg);

// Шаблонные строки (template srrings)

const quantity = 5;
const orderMsg = `Вы заказываете ${quantity} холодильников.`;

console.log(orderMsg);
 //Нормализация с методом toLowerCase()

let brand = prompt('Давай бренд');
brand = brand.toLowerCase();
console.log(brand);

//Поиск в строке с методом includes()

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет,я принц Абдул,это не спам,предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlyvestmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord1));

console.log(string2.includes(blacklistedWord1));
console.log(string2.toLowerCase().includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord1));

