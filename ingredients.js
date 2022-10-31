


const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let ingredient = 0;
while (ingredient < ingredients.length) {
  console.log(ingredients[ingredient]);
  ingredient++;
}

// Write a for loop that prints out the contents of ingredients:

for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k])
}