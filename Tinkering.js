/*
let temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
*/

let whichSchool = function age(years) {
  if (years < 13) {
    return "Elementary School"
  } else if (years < 19) {
    return "Secondary School"
  } else {
    return "Lighthouse Labs"
  }
}