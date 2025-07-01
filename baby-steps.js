let result = 0;
for (i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
}
console.log(result);
// Usage: node baby-steps.js <num1> <num2> ... <numN>         
