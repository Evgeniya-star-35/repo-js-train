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
