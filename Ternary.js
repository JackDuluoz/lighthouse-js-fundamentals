/*
let greenLight = false
let pedal = greenLight ? "accelerator" : "brake"
console.log(pedal)*/

let eatsPlants = true
let eatsAnimals = true
let animalType = eatsAnimals && eatsPlants ? "omnivore" : eatsPlants && !eatsAnimals ? "herbivore" : eatsAnimals && !eatsPlants ? "carnivore" : "starving"
console.log(animalType)