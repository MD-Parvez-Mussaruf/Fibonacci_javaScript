// Define a function to generate the first 'n' Fibonacci numbers
function fibonacciGenerator(n) {
    // Initialize the Fibonacci sequence with the first two numbers: 0 and 1
    const fibonacci = [0, 1];

    // Check if the user wants only the first Fibonacci number
    if (n === 1) {
        return [0]; // Return an array with just the first Fibonacci number
    }

    // Check if the user wants only the first two Fibonacci numbers
    if (n === 2) {
        return [0, 1]; // Return an array with the first two Fibonacci numbers
    }

    // Loop to calculate the remaining Fibonacci numbers up to 'n'
    for (var p = 2; p < n; p++) { // Start from index 2 since the first two numbers are already in the array
        const lastTwo = fibonacci.slice(-2); // Get the last two numbers in the Fibonacci sequence
        const sum = lastTwo[0] + lastTwo[1]; // Calculate the sum of the last two numbers
        fibonacci.push(sum); // Add the sum to the Fibonacci sequence
    }

    // Return the complete Fibonacci sequence up to 'n' numbers
    return fibonacci;
}

// Call the function to generate the first 15 Fibonacci numbers
console.log(fibonacciGenerator(15)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
