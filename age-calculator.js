

function ageCalculator(name, birth, year) {
  let personAge = year - birth  
  let message = name + " is " + personAge + " years old."
  return message  
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));