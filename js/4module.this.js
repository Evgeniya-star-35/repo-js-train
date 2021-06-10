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

const user = {
    tag: 'Mango',
    showTag() {
        console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
    },
};

user.showTag();

// если ф-я вызвалась без контекста объекта- будет undefined

const outerShowTag = user.showTag;

outerShowTag();
