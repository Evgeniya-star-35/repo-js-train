//============================
// function countPoints(arr) {
//   return arr
//     .map(x => x.split(':').map(y => +y))
//     .reduce((x, [y, z]) => x + (y > z ? 3 : y < z ? 0 : 1), 0);
// }
//=========================================//
//2 variant
function countPoints(finalScores) {
  let score = 0;
  let winPoints = 3;
  let losePoints = 0;
  let drawPoints = 1;
  for (let i = 0; i < finalScores.length; i++) {
    let games = finalScores[i].split(':');

    let x = parseInt(games[0]);
    let y = parseInt(games[1]);

    if (x > y) {
      score += winPoints;
    } else if (x < y) {
      score += losePoints;
    } else {
      score += drawPoints;
    }
  }
  return score;
}
console.log(
  countPoints([
    '100:90',
    '110:98',
    '100:100',
    '95:46',
    '54:90',
    '99:44',
    '90:90',
    '111:100',
  ]),
); // => 17);
function getAge(age) {
  const startDate = 1970;

  const curDate = Date.now() - age.getTime();
  const ageDate = new Date(curDate);
  const result = Math.abs(ageDate.getUTCFullYear() - startDate);
  return result;
}


function getWeekDay(date) {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}


function getAmountDaysToNewYear() {
  let theСalendrMonth = 12;
  let compMonth = 11;
  let lastDayDec = 31;
  let oneThousend = 1000;
  let sixty = 60;
  let houerInADay = 24;

  let today = new Date();
  let NewYear = today.getFullYear();

  if (today.getMonth() === theСalendrMonth && today.getDate() > lastDayDec) {
    NewYear = NewYear + 1;
  }

  let NewYearDate = new Date(NewYear, compMonth, lastDayDec);
  let dayMilliseconds = oneThousend * sixty * sixty * houerInADay;

  return Math.ceil((NewYearDate.getTime() - today.getTime()) / dayMilliseconds);
}


function getProgrammersDay(year) {
  const PROGRAMMERS_DAY = 256;
  let programmersDateObj = new Date(year, 0, PROGRAMMERS_DAY);

  let programmersDate = programmersDateObj.getDate();
  let programmersMonth = programmersDateObj.toLocaleString('en-EN', {
    month: 'short'
  });
  let programmersYear = programmersDateObj.getFullYear();
  let programmersWeekDay = getWeekDay(programmersDate);

  return `${programmersDate} ${programmersMonth}, ${programmersYear} (${programmersWeekDay})`;
}


function howFarIs(dataStr) {
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentWeekday = new Date().toLocaleString('en', { weekday: 'long' });
  const currentIndx = new Date().getUTCDay();

  const givenWeekday = dataStr;
  const givenIndx = weekday.map(el => el.toLowerCase()).indexOf(givenWeekday.toLowerCase());

  const weekDays = 7;

  if (currentIndx === givenIndx) {
    return `Hey, today is ${ currentWeekday } =)`
  }

  if (currentIndx > givenIndx) {
    let result = weekDays - currentIndx + givenIndx;
    return `It's ${result} day(s) left till ${weekday[givenIndx]}.`
  }
  if (currentIndx < givenIndx) {
    let result = givenIndx - currentIndx;
    return `It's ${result} day(s) left till ${weekday[givenIndx]}.`
  }
}


function isValidIdentifier(dataValid) {
	const myReg = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/
	const result = myReg.test(dataValid)
	return result
}


function capitalize(dataStrCap) {
  return dataStrCap.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter.toUpperCase()
  );
}


function isValidAudioFile(dataStrAudio) {
  dataStrAudio = /^[a-zA-Z]+(.mp3|.flac|.alac|.aac)$/.test(dataStrAudio);
  return dataStrAudio;
}


function getHexadecimalColors(dataHexStr) {
    return dataHexStr.match(/#([a-f0-9]{3}){1,2}\b/gi);
}