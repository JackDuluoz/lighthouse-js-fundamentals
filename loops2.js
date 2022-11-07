function loopyLighthouse(range, multiples, words) {
  let number = range[0] - 1
  let loop = []
  while (number < range[1]) {
    number = number + 1
    loop.push(number)    
  }
  for (let l = 0; l < loop.length; l++) {
    if ((loop[l] % multiples[0] === 0) && (loop[l] % multiples[1] === 0)) {
      loop.splice(l, 1, words[0] + words[1])
    } else if (loop[l] % multiples[0] === 0) {
      loop.splice(l, 1, words[0])
    } else if (loop[l] % multiples[1] === 0) {
      loop.splice(l, 1, words[1])
    }
  }
  console.log(loop.join("\n"))
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);