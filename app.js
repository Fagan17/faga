
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