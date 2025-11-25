let fullName = "Fagan Maharramov";
console.log(fullName.split(" ")[0][0]);
console.log(fullName.split(" ")[1][0]);
let userName = "Fagan Maharramov";
let cut = (userName.trim().split(" "));
let firstName = cut[0]
let lastName = cut[1]
let reversed = lastName + " " + firstName;
console.log(reversed);