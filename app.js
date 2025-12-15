function isValidNumber(num){
let s = String(num);
return s.length === 12 && s.startsWith("+7")
}
console.log(isValidNumber("+71213112223"))

function numCounter(count){
   let s = String(count);
   return s.length
}
console.log(numCounter("SALAM"))

function capitalizeWords(text) {
  return text.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords("Hey my name is Fagan"))