


function smartGarbage(trash, bins) {
  for (let bin in bins) {
    if (trash === bin) {
      bins[bin]++
    }
  }    
  return bins
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))
console.log(smartGarbage('mixed', { waste: 7, recycling: 9, compost: 13 }))