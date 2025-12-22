
let text = prompt("Metni daxil edin");
let i = 0
let varEded = false;
while (i < text.length) {
  if (text[i] >= '0' && text[i] <= '9') {
    varEded = true;
    break;
  }
  i++;
}

if (varEded) {
  console.log(" Metnde reqem var.");
} else {
  console.log("Metnde reqem yoxdur.");
}



let metn = prompt("Metni daxil edin");
let hasNumber = false;
for (let i= 0; i <metn.length; i++){
  if (!isNaN(metn[i]) && metn[i]!== " "){
    hasNumber = true
    break;

  }
}
if (hasNumber){
console.log("Metnde reqem var");
}else{
  console.log("Metnde reqem yoxdur");
}


