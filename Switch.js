let education = "ma"
switch (education) {
  case "high school":
    salary = "35kpa";
    break;
  case "assoc":
    salary = "41.5kpa";
    break;
  case "ba":
    salary = "59kpa";
    break;
  case "ma":
    salary = "70kpa";
    break;
  case "pro":
    salary = "90kpa";
    break;
  case "phd":
    salary = "84kpa";
    break;
  default:
    salary = "25kpa";
    break;
}
console.log("A person with a " + education + " earns " + salary + ".");