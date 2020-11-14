/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const hour = timeString.split(":")[0];
  if (hour < 12 && hour >= 0) {
    return "Good Morning";
  } else if (hour >= 12 && hour <= 17) {
    return "Good Afternoon";
  } else if (hour > 17 && hour <= 23) {
    return "Good Evening";
  } else {
    return "${timeString} is not a valid time";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting;
}
