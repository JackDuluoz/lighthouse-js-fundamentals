/*

let hammerPrice = 27.99 //The price of the hammer in the hardware store.
let wallet = 40.00 //How much money I have in my wallet.
//If I have more money in my wallet than the price of the hammer in the hardware store, I can afford the hammer.
if (wallet >= hammerPrice) {
  console.log("You can afford this hammer.")
} else {
  console.log("You need to save more money.")
}

// New example: Weather.

let weather = 'dry'
if (weather === 'snow') {
  console.log("Wear snow boots.")
} else if (weather === 'rain') {
  console.log("Wear gumboots.")
} else {
  console.log("Sandals are fine.")
}


//Odd/Even numbers.

let number = 12
if (number % 2 === 0) {
  console.log("Even")
} else {
  console.log("Odd")
}



let musicians = 4
if (musicians <= 0) {
  console.log("not a group")
} else if (musicians === 1) {
  console.log("solo")
} else if (musicians === 2) {
  console.log("duet")
} else if (musicians === 3) {
  console.log("trio") 
} else if (musicians === 4) {
  console.log("quartet")
} else {
  console.log("this is a large group")
  }

  */

let balance = 50000 
let balanceCheck = true
let accountActive = true
if (balanceCheck === true) {
  if (accountActive === true && balance > 0) {
    console.log("Your balance is $" + balance + ".")
  } else if (accountActive === true && balance === 0) {
    console.log("Your account is empty.")
  } else if (accountActive === true && balance < 0) {
    console.log("Your balance is negative. PLease contact bank.")
  } else if (accountActive === false) {
    console.log("Your account is no longer active.")
  }
} else {
    console.log("Thank you. Have a nice day.")
  }