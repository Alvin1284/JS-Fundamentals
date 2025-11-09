function add(a, b) {
    return a + b;
}

// Get the first and second arguments from the command line
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

// Print the result of the addition
console.log(add(a, b));