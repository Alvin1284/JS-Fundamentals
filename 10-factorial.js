const num = Number(process.argv[2]);

// Define a recursive function to compute factorial
function factorial(n) {
    if (isNaN(n) || n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Print the result
console.log(factorial(num));