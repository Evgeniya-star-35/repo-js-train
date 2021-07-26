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
const date = new Date();

// проверим количество мс с с начала эпохи Unix
console.log(`Время в мс с начала эпохи Unix: ${date.getTime()}`);
// "Время в мс с начала эпохи Unix: ....  значения будут меняться :-)
// "Время в мс с начала эпохи Unix: 1504721892483"

let result = 'Date: ';
result += date.getFullYear() + '/'; // год
result += date.getMonth() + '/'; // месяц, начиная с 0
result += date.getDate() + '. Day of week: '; // день недели, начиная с 1
result += date.getDay() + '.'; // день , начиная с 0

result += ' Time: ' + date.getHours() + ':'; // часы
result += date.getMinutes() + ':'; // минуты
result += date.getSeconds() + ':'; // секунды
result += date.getMilliseconds() + ''; // милисекунды

// строка должна показать текущее время и дату
console.log(result); // "Date: 2017/8/6. Day of week: 3. Time: 21:18:12:483"
// ...  значения будут меняться :-)
