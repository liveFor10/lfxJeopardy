/* import { jwDistance } from "../jaro-winkler/jaro-winkler-js.min.js" */


function reduce(v1) {

  let v2 = v1.toLowerCase();
  v2 = v2.replace('the ', '');
  v2 = v2.replace('a ', '');
  v2 = v2.replace('what is ', '');
  v2 = v2.replace('?', '');
  v2 = v2.replace('-', '');
  v2 = v2.replace('<i>', '');
  v2 = v2.replace('</i>', '');
  v2 = v2.replace('\\', '');
  v2 = v2.replace('"', '');
  return v2;
}

function scoreAnswer(guess, answer, pv) {

  let score;

  console.log('reduce(guess)=' + reduce(guess));
  console.log('reduce(answer)=' + reduce(answer));
  console.log(`reduce(guess) === reduce(answer): ${reduce(guess) === reduce(answer)}`);

  if (
      (reduce(guess) === reduce(answer)) ||
      (reduce(guess).includes(reduce(answer))) /* ||
      (reduce(guess).jwDistance(reduce(answer)) > .8) */
     ) {
    score = pv;
  } else {
    score = pv * -1;
  }
  
  console.log('guess=' + guess);
  console.log('answer=' + answer);
  console.log(`guess === answer: ${guess === answer}`);
  console.log('score=' + score);
  return score;
}


export { reduce, scoreAnswer };
