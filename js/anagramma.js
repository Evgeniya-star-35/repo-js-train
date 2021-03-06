// Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
// Постановка
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

// anagram('finder','Friend'); --> true
// anagram('hello','bye'); --> false
// Разбираем задание
// Здесь важно учитывать, что необходимо проверять каждую букву в двух входных строках и их количество в каждой строке.
// finder → f: 1 friend → f: 1
// i: 1 r: 1
// n: 1 i: 1
// d: 1 e: 1
// e: 1 n: 1
// r: 1 d: 1
// Для хранения данных анаграммы стоит выбрать такую структуру, как объектный литерал JavaScript. Ключ в этом случае — символ буквы, значение — количество ее повторений в текущей строке.
// Есть и другие условия:
// Нужно убедиться в том, что регистр букв при сравнении не учитывается. Просто преобразуем обе строки в нижний или верхний регистр.
// Исключаем из сравнения все не-символы. Лучше всего работать с регулярными выражениями.
// Решение

const buildCharObject = str => {
  const charObj = {};
  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
};

const anagram = (strA, strB) => {
  const aCharObject = buildCharObject(strA);
  const bCharObject = buildCharObject(strB);

  if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    for (let char in aCharObject) {
      if (aCharObject[char] !== bCharObject[char]) {
        return false;
      }
    }
    return true;
  }
};
buildCharObject('finder');
anagram('finder', 'Friend'); // --> true
anagram('hello', 'bye'); // --> false
// Обратите внимание на использование Object.keys() в сниппете выше. Этот метод возвращает массив, содержащий имена или ключи в таком же порядке, в каком они встречаются в объекте. В этом случае массив будет таким:
// [‘f’, ‘i’, ’n’, ‘d’, ‘e’, ‘r’]
// Таким образом, мы получаем свойства объекта без необходимости выполнять объемный цикл. В задаче можно использовать этот способ со свойством .length — для проверки того, есть ли в обеих строках одинаковое количество символов — это важная особенность анаграмм.
