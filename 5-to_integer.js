const args = process.argv.slice(2);

// Convert the first argument to an integer
const num = Number(args[0]);

// Check if it's a valid number
if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}