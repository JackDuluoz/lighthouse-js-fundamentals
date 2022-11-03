


function lastIndexOf(array, number) {
  let matches = []
  if (array.length > 0) {  
    for (let index = 0; index < array.length; index++) {
      if (array[index] === number) {
        matches.push(index)     
      }
    }
    if (matches.length > 0) {
      return matches.reverse()[0]
    } else {
      return -1
    }
  } else {
    return -1
  }
} 

console.log(lastIndexOf([0, 1, 4, 1, 2], 1))
console.log(lastIndexOf([0, 1, 4, 1, 2], 2))
console.log(lastIndexOf([0, 1, 4, 1, 2], 3))
console.log(lastIndexOf([5, 5, 5], 5))
console.log(lastIndexOf([], 3))