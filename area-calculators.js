



function calculateRectangleArea(length, width) {
  let recArea = length * width
  if (recArea > 0) {
    return recArea
  }
}

function calculateTriangleArea(base, height) {
  let triArea = base * height / 2
  if (triArea > 0) {
    return triArea
  }
}

function calculateCircleArea(radius) {
  let circArea = Math.PI * radius * radius
  if (radius > 0) {
    return circArea
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined