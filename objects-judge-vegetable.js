

function judgeVegetable(vegetables, metric) {
  let scores = []
  let winners = []
  for (let i = 0; i < vegetables.length; i++) {
    scores.push(vegetables[i][metric])
  }
  let highestNumber = Math.max(...scores)
  for (let w = 0; w < vegetables.length; w++) {  
    if (vegetables[w][metric] === highestNumber) {
      winners.push(vegetables[w].submitter)
    }
  }
  return winners.toString()
}  


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))
