


function howManyHundreds(bottles) {
  let containers = bottles / 100
  let wholeBottles = bottles - (bottles % 100)
  let wholeContainers = wholeBottles / 100 
  if (bottles % 100 === 0) {
    return containers
  } else {
    return wholeContainers
  }  
}

console.log(howManyHundreds(894))