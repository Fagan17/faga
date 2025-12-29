let arr = [1,2,3,4,5];
let newA = [...arr];
for (let i = 0; i < newA.length; i++){
    newA[i] *=2
}
console.log(arr)
console.log(newA)