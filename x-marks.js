
const moves = ["north", "north", "west", "west", "north", "east", "north"]


function finalPosition(moves) {
  let startx = 0
  let starty = 0
  let endx
  let endy
  let finalCoordinates = []
  for (const move of moves) {
    if (move === "north") {
      starty = starty + 1
    }
    if (move === "south") {
      starty = starty - 1
    }
    if (move === "east") {
      startx = startx + 1
    }
    if (move === "west") {
      startx = startx - 1
    }
    endx = startx
    endy = starty
  }
  finalCoordinates.push(endx, endy)
  return finalCoordinates  
}
console.log(finalPosition(moves))