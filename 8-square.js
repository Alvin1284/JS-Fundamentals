const size = Number(process.argv[2]);

// Check if size is a valid number
if (isNaN(size)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) {
        console.log('X'.repeat(size));
    }
}