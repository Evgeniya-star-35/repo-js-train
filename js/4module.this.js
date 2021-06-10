// Контекст this
//     - где и как была объявлена ф - я НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст
//     -контекст определяется В МОМЕНТ ВЫЗОВА Ф_ИИ, если он не привязан явно

// если ф-я вызывается как метод объекта,то this всегда ссылается на этот объект.
// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();   



// вызов без контекста .Если строгий режим,то получим андефайнд

// const foo = () => {
//     console.log('foo -> this ', this);
// };
// foo();
//  если БЕЗ строгого режима,тогда this будет ссылаться на window

// как метод объекта, но объявлена как внешняя функция
// в контексте объекта

// const showTag = () => {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };
// showTag();

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// // если ф-я вызвалась без контекста объекта- будет undefined

// const outerShowTag = user.showTag;

// outerShowTag();



//  Контекст в callback - ф-ях

// const user = {
//     tag: 'Mango',
//     showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//     },
// };
// const invokeAction = action => {
//     console.log(action);
//     action()
// };
// invokeAction(user.ShowTag);

// xxxxxxxxxxxxxxxxxxxxxx

// const makeChangeColor = () => {
//     const changeColor = color => {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };
//     // changeColor();

// const sweater = {
//     color: 'teal',
//     };

//     sweater.updateColor = changeColor;
//     // sweater.updateColor('red');
// return sweater.updateColor;
// };



// const swapColor = makeChangeColor();
// swapColor('blue');

// const counter = {}




                       // Методы функции 
           // call apply

// const showThis = function () {

//     console.log('showThis -> this', this);

// };
// // showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA);

// const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         this.color = color;
//     };


//     const hat = {
//     color: 'black',
// };

// changeColor.call(hat, 'orange');

//     const sweater = {
//     color: 'green',
//     };
