
function reqemler(arr) {
  let musbet = 0;
  let menfi = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      musbet++;
    } else {
      menfi++;
    }
  }
  return {
    even: musbet,
    odd: menfi
  };
}
console.log(reqemler([1, 2, 3, 4, 5, 6]));
