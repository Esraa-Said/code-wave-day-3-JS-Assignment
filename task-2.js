alert("Welcome to my site");

let name = prompt("Please enter your name:");
let color = prompt("Choose a color (red, green, or blue):").toLowerCase();

if (color === "red" || color === "green" || color === "blue") {
  document.body.innerHTML = `<p style="color:${color};">Welcome, ${name}</p>`;
} else {
  alert("Invalid color choice");
  document.body.innerHTML = `<p>Welcome, ${name}</p>`;
}
