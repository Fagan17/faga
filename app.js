let arr = [1,2,3,4,5,6,7,8,9];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    sum += arr[i];
  }
}

console.log(sum); 


let a = ["js", "front", "array","css"];
let result = [];

for (let i = 0; i < a.length; i++) {
  let reversed = a[i]
    .split("")
    .sort((a, b) => -1)
    .join("");

  result.push(reversed);
}

console.log(result); 