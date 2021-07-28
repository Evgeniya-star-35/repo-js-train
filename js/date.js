// const date = new Date();
// console.log('Date: ' + date);

// // возвращает день месяца от 1 до 31
// console.log('getDate(): ' + date.getDate());

// // возвращает день недели от 0 до 6
// console.log('getDay(): ' + date.getDay());

// // возвращает месяц от 0 до 11
// console.log('getMonth(): ' + date.getMonth());

// // возвращает год из 4 цифр
// console.log('getFullYear(): ' + date.getFullYear());

// // возвращает час
// console.log('getHours(): ' + date.getHours());

// // возвращает минуты
// console.log('getMinutes(): ' + date.getMinutes());

// // возвращает секунды
// console.log('getSeconds(): ' + date.getSeconds());

// // возвращает миллисекунды
// console.log('getMilliseconds(): ' + date.getMilliseconds());

// // возвращает кол-во миллисекунд прошедших со старта эпохи Unix
// console.log('getTime(): ' + date.getTime());
// const date = new Date();

// // проверим количество мс с с начала эпохи Unix
// console.log(`Время в мс с начала эпохи Unix: ${date.getTime()}`);
// // "Время в мс с начала эпохи Unix: ....  значения будут меняться :-)
// // "Время в мс с начала эпохи Unix: 1504721892483"

// let result = 'Date: ';
// result += date.getFullYear() + '/'; // год
// result += date.getMonth() + '/'; // месяц, начиная с 0
// result += date.getDate() + '. Day of week: '; // день недели, начиная с 1
// result += date.getDay() + '.'; // день , начиная с 0

// result += ' Time: ' + date.getHours() + ':'; // часы
// result += date.getMinutes() + ':'; // минуты
// result += date.getSeconds() + ':'; // секунды
// result += date.getMilliseconds() + ''; // милисекунды

// // строка должна показать текущее время и дату
// console.log(result); // "Date: 2017/8/6. Day of week: 3. Time: 21:18:12:483"
// // ...  значения будут меняться :-)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx setter XXXXXXXXXXXXXXXXXX
// Для установки даты существует 2 способа. Установим 1500000000000мс
// с начала эры Unix с помощью конструктора
// const date = new Date(2017, 6, 14, 5, 40, 0, 0);

// // Проверим
// console.log(`2017, 6, 14, 5, 40 соответствует ${date.getTime()}`);
// // "2017, 6, 14, 5, 40 соответствует 1500000000000"

// /* С помощью методов set */
// // Создадим новый объект с текущей датой
// const secondDate = new Date();

// // Изменим год и в нем же месяц и день месяца
// secondDate.setFullYear(2017, 6, 14);
// // Изменим час и в нем же минуты, секунды и милисекунды
// secondDate.setHours(5, 40, 0, 0);

// // Проверим
// console.log(`2017, 6, 14, 5, 40 соответствует ${secondDate.getTime()}`);
// // "2017, 6, 14, 5, 40 соотвествует 1500000000000"
// xxxxxxxxxxxxxxxxxxxxxxxxxx Форматирование и вывод дат xxxxxxxxxxxxxxxxxxxxxxxxxxxx

let date = new Date();

// формат вывода
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

// Украина
const localeUk = date.toLocaleString('Uk-uk', options);
console.log(localeUk); // понеділок, 19 бер. 2018 р., 17:42

// USA
const localeUs = date.toLocaleString('en-US', options);
console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM

// ххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххххх
let a = false;
if (a == '0') {
  console.log('==');
}
if (a === '0') {
  console.log('===');
}
