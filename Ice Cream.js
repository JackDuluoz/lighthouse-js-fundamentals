let flavour = "vanilla"
let vessel = "cone"
let toppings = "sprinkles"
if ((flavour === "vanilla" || flavour === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")) {
  console.log("I'd like two scoops of " + flavour + " ice cream in a " + vessel + " with " + toppings +".")
} else {
  console.log("Nothing for me, thank you.")
}