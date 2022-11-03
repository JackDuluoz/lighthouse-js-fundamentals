function range(start, end, step) {
  let limitNumber
  if ((end - start) % step === 0) {
    limitNumber = end
  } else {
    limitNumber = end - ((end - start) % step)
  }
  let output = []
  if (start < limitNumber && step > 0) {
    output.push(start)
    while (start < limitNumber) {
      start = start + step
      output.push(start)
    }
  }
  return output
}



console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

console.log(range())