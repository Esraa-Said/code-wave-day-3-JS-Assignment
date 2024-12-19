let sum = 0;
let input;

do {
  input = prompt("Enter a numeric value:");
  if (!isNaN(input) && input.trim() !== "") {
    input = parseFloat(input);
    sum += input;
  } else {
    alert("Please enter a valid numeric Value.");
  }
} while (input !== 0 && sum <= 100);

alert(`The total sum: ${sum}`);
