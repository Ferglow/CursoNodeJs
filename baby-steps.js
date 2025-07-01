let result = 0;
for (i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
}
console.log(result);
// Usage: node baby-steps.js <num1> <num2> ... <numN>       

// Example: node baby-steps.js 1 2 3
// Output: 6
// This code takes command line arguments, converts them to numbers, and sums them up.
// It then prints the total to the console.
