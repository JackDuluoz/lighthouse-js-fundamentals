/*
function reverseName(nameHere) {
  let outputName = ""
  for (let i = nameHere.length - 1; i >= 0; i--) {
    outputName += nameHere[i]
  } 
  return outputName
}
console.log(reverseName("Michael"))

function greeting() {
  let salutation = "Howdy!"
  return salutation
}
console.log(greeting())


function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);
*/

function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  let triangle = "";

  //Let's start from the topmost line
  let lineNumber = 1;

  for (lineNumber = 1; lineNumber <= length; lineNumber++) {
    // We will not print one line at a time.
    // Rather, we will make a huge string that will comprise the whole triangle
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}

console.log(buildTriangle(8));
