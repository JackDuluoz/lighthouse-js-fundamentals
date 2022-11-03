

function concat(data1, data2) {
  let combined = []
  for (let first = 0; first < data1.length; first++) {
    combined.push(data1[first])
  }
  for (let second = 0; second < data2.length; second++) {
    combined.push(data2[second])
  }
  
  return combined
}



  console.log(concat([1, 2, 3], [4, 5, 6]))
  console.log(concat([0, 3, 1], [9, 7, 2]))
  console.log(concat([], [9, 7, 2]))
  console.log(concat([5, 10], []))