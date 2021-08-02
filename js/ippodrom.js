const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);
// const promises = horses.map(run);
function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);
  Promise.race(promises).then(({ horse, time }) => {
    updateWinnerField(`Победил ${horse},финишировав за ${time} времени`);
  });
  updateWinnerField('');
  updateProgressField('🤖 Заезд начался, ставки не принимаются!');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField.textContent = `🎉 Победил ${horse}, финишировав за ${time}
    времени`;
    Promise.all(horsesP).then(() => {
      updateProgressField('Заезд окончен,принимаются ставки');
    });
    updateResultsTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField('📝 Заезд окончен, принимаются ставки.');
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}
// console.log(
//   'Заезд начался,ставки больше не принимаются',
//   'color:brown,font-size:14px;',
// );

// const promises = horses.map(run);
/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */
// Promise.race(promises).then(({ horse, time }) => {
//   console.log(`Победил ${horse},финишировав за ${time} времени`);
// }); //ждет выполнения первого промиса,не дожидается выполнения остальных
/*
 * Promise.all([]) для ожидания всех промисов
 */
// Promise.all(promises).then(() =>
//   console.log('Заезд окончен,принимаются ставки'),
// );

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
