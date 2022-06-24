///////////////////////////////////////////////////////////////

// THE SWITCH STATEMENT

///////////////////////////////////////////////////////////////

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan my course structure");
    console.log("Go to the gym");
    break;
  case "tuesday":
    console.log("Go to the gym");
    console.log("feed my cat");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Go to the gym");
    console.log("Go do the shopping");
    break;
  case "saturday":
  case "sunday":
    console.log("Go to the gym");
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan my course structure");
  console.log("Go to the gym");
} else if (day == "tuesday") {
  console.log("Go to the gym");
  console.log("feed my cat");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Go to the gym");
  console.log("Go do the shopping");
} else if (day === "saturday" || day === "sunday") {
  console.log("Go to the gym");
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
