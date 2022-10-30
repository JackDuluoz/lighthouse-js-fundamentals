const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]

function chooseStations(stations) {
  const appropriateStations = []
  for (const station of stations) {
    const name = station[0]
    const capacity = station[1]
    const venue = station[2]
    if (capacity >= 20 && ((venue === 'school') || (venue === 'community centre'))) {
      appropriateStations.push(name)
    }
  }
  return appropriateStations
}
console.log(chooseStations(stations))