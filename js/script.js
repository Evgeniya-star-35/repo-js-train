import users from './users.js';
// console.log(users);

// Task 1

// Получить массив имен всех пользователей (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// const getUserNames = usersData => {
//   return usersData.map(user => user.name);
// };
// console.log(getUserNames(users));

// Task 2

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// const getUsersWithEyeColor = (users, eyeColor) => {
//   return users.filter(user => user.eyeColor === eyeColor);
// };
// console.log(getUsersWithEyeColor(users, 'blue'));

// Task 3

// Получить массив имен пользователей по полу (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const getUsersWithGender = (users, gender) => {
// return users.filter(user => user.gender === gender)
// .map(({name}) => name);
// }
// console.log(getUsersWithGender(users, 'male'));

// const getUsersWithGender =  (users, gender) => {
//     return users.reduce((acc, user) => {
//         if(user.gender === gender) {
//         acc.push(user.name);
//         };
//         return acc;
//     }, [])
// }

// console.log(getUsersWithGender(users, 'male'));
// const getUsersWithGender = (users, gender) => {

// return users.filter(user => user.gender === gender)
// .map(({name}) => name);
// }
// console.log(getUsersWithGender(users, 'male'));

// const getUsersWithGender =  (users, gender) => {
//     return users.reduce((acc, user) => {
//         if(user.gender === gender) {
//         acc.push(user.name);
//         };
//         return acc;
//     }, [])
// }

// console.log(getUsersWithGender(users, 'male'));

// const getUsersWithGender = (users, gender) => {
//   return users.reduce((acc, user) => {
//     return user.gender === gender ? [...acc, user.name] : acc;
//   }, []);
// };

// console.log(getUsersWithGender(users, 'male'));

// Task 4

// Получить массив только неактивных пользователей (поле isActive).
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
// const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);
// console.log(getInactiveUsers(users));

// Task 5

// Получить пользователя (не массив) по email (поле email, он уникальный).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// const getUserWithEmail(users, email)

// Task 6

// Получить массив пользователей в возрасте от min до max

// console.log( getUsersWithAge( users, 20, 30 ) );
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// const getUsersWithAge = (users, min, max) => {
//   return users.reduce((acc, user) => {
//     return user.age >= min && user.age <= max ? [...acc, user] : acc;
//   }, []);
// };
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// Task 7

// Получить общую сумму баланса (поле balance) всех пользователей.
// console.log(calculateTotalBalance(users)); // 20916

// const calculateTotalBalance = users => {
//   return users.reduce((acc, { balance }) => acc + balance, 0);
// };
// console.log(calculateTotalBalance(users));

// Task 8

// Массив имен всех пользователей у которых есть друг с указанным именем.
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(({ friends }) => friends.includes(friendName))
//     .map(({ name }) => name);
// };

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// Task 9

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// const getNamesSortedByFriendsCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(({ name }) => name);
// };
// console.log(getNamesSortedByFriendsCount(users));

// Task 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть
// повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// const getSortedUniqueSkills = users =>
//   users
//     .flatMap(({ skills }) => skills)
//     .filter((skill, index, array) => array.indexOf(skill) === index)
//     .sort();

// console.log(getSortedUniqueSkills(users));

// Task 11

// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.
// const getSums = arr => {
//   let prevNum = 0;
//   return arr.reduce((acc, num) => {
//     acc.push((prevNum += num));
//     return acc;
//   }, []);
// };
// const getSums = (arr) => {
//     return arr.reduce((acc, num, i) => {
//         if (i > 0) {
//             acc.push(acc[i - 1] + num)
//             return acc
//         } else {
//             return [num]
//         }
//    }, [])
// };

// const getSums = (arr) =>
//   arr.reduce((acc, num, i) => (i > 0 ? [...acc, acc[i - 1] + num] : [num]), []);

// console.log(getSums([1, 2, 3, 4, 5]));

// Task 12

// Возврат: строка, отформатированная как список имен,
// разделенных запятыми, за исключением последних двух имен,
// которые должны быть разделены амперсандом.

// [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}] Вернет 'Bart, Lisa, Maggie, Homer & Marge',

// [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}] вернет  'Bart, Lisa & Maggie'

// [{name: 'Bart'},{name: 'Lisa'}] вернет 'Bart & Lisa',

// [{name: 'Bart'}] вернет 'Bart'

// [] вернет ''

// const makeList = arr => {
//   const names = arr.map(({ name }) => name);
//   if (names.length <= 2) {
//     return names.join(' & ');
//   } else {
//     return names.slice(0, names.length - 1).join(', ') + ' & ' + names.pop();
//   }
// };

// console.log(
//   makeList([
//     { name: 'Bart' },
//     { name: 'Lisa' },
//     { name: 'Maggie' },
//     { name: 'Homer' },
//     { name: 'Marge' },
//   ]),
// ); // 'Bart, Lisa, Maggie, Homer & Marge'
// console.log(makeList([]));
