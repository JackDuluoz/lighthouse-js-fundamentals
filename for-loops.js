
/*for (let i = 2; i < 101; i += 12) {
  console.log("Count = " + i + ".")
} 


/*
for (let firstNumber = 0; firstNumber < 100; firstNumber = firstNumber + 1) {
  for (let secondNumber = 1; secondNumber < 4; secondNumber = secondNumber + 1) {
    for (let thirdNumber = 2; thirdNumber < 7; thirdNumber = thirdNumber + 2) {
      console.log(firstNumber + ", " + secondNumber + ", " + thirdNumber)
    }
  }
}


for (let x = 9; x >= 1; x--) {
  console.log("hello " + x)
}


let solution = 1
for (let x = 1; x <= 12; x++) {
  solution *= x
}
console.log(solution)
*/

for (let row = 0; row <= 25; row++) {
  for (let seat = 0; seat < 100; seat++) {
    console.log(row + ", " + seat)
  }
}