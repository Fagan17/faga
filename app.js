let user = {
  name: "Fagan",
  age: 28,
 retirementAge: 65,
 setAge(newAge) {
this.age = newAge;
 },
 getYearsBeforeRetirement(){
  return this.retirementAge - this.age;
 }
};
let yearsLeft = user.getYearsBeforeRetirement();
console.log("Pensiyaya qalan il",yearsLeft)