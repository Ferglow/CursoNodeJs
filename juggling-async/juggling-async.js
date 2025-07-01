const http = require('http');
const bl = require('bl');
const results = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }
      results[index] = data.toString();
      count++;
      if (count === 3) {
        printResults();
      }
    }));
  });
}

for (let i = 0; i < 3; i++) {
  httpGet(i);
}   

// This code performs three asynchronous HTTP GET requests to URLs provided as command line arguments.
// It uses the 'http' module to make the requests and the 'bl' module to collect the response data.
// The results are stored in an array, and once all three requests are complete, it prints the results to the console.
// To run this code, you need to provide three URLs as command line arguments, like so:
// node juggling_async.js http://example1.com http://example2.com http://example3.com
// Make sure to replace 'http://example1.com', 'http://example2.com', and 'http://example3.com' with actual URLs.
// This code is useful for learning how to handle multiple asynchronous operations in Node.js and can be adapted for various use cases where you need to fetch data from multiple sources concurrently.
// Note: Ensure that the URLs you provide are accessible and return valid responses.
// If any of the requests fail, the error will be logged to the console, but the program will continue to attempt the other requests.
// This is a common pattern in Node.js for handling multiple asynchronous operations, allowing you to perform tasks concurrently without blocking the event loop.
// The code is structured to handle three requests, but you can easily modify it to handle more or fewer requests by changing the loop and the number of command line arguments.
// This approach is efficient for scenarios where you need to gather data from multiple endpoints and process it once all responses are received.
// Make sure to have the 'bl' module installed in your Node.js environment by running:
// npm install bl
// This will allow you to use the 'bl' module for buffering the response data.
// The code is a good example of how to work with streams in Node.js, particularly for HTTP responses, and demonstrates the use of callbacks to handle asynchronous operations effectively.
// It also highlights the importance of error handling in asynchronous code, ensuring that any issues with the requests are logged appropriately without crashing the program.
// This pattern is commonly used in Node.js applications to manage multiple asynchronous tasks, making it a valuable technique for developers working with APIs or web services.
// The code is designed to be run in a Node.js environment, and it assumes that the user has basic knowledge of how to run Node.js scripts from the command line.
// It serves as a practical example of handling asynchronous operations in JavaScript, particularly in the context of web development and API consumption.
// The use of the 'bl' module simplifies the process of collecting data from streams, making it easier to work with HTTP responses in a more manageable way.
// This code can be extended or modified to include additional functionality, such as processing the response data further or handling different types of responses based on the content type.
// Overall, this code snippet is a great starting point for anyone looking to understand asynchronous programming in Node.js and how to work with HTTP requests and responses effectively.  
// Note: Ensure that the URLs you provide are accessible and return valid responses.
// If any of the requests fail, the error will be logged to the console, but the program will continue to attempt the other requests.
// This is a common pattern in Node.js for handling multiple asynchronous operations, allowing you to perform tasks concurrently without blocking the event loop.   
// The code is structured to handle three requests, but you can easily modify it to handle more or fewer requests by changing the loop and the number of command line arguments.
// This approach is efficient for scenarios where you need to gather data from multiple endpoints and process it concurrently.
// once all responses are received.
// Make sure to have the 'bl' module installed in your Node.js environment by running:
// npm install bl
// This will allow you to use the 'bl' module for buffering the response data.
// The code is a good example of how to work with streams in Node.js, particularly for HTTP responses, and demonstrates the use of callbacks to handle asynchronous operations effectively.
// It also highlights the importance of error handling in asynchronous code, ensuring that any issues with the requests are logged appropriately without crashing the program.
// This pattern is commonly used in Node.js applications to manage multiple asynchronous tasks, making it a valuable technique for developers working with APIs or web services.
// The code is designed to be run in a Node.js environment, and it assumes that the user has basic knowledge of how to run Node.js scripts from the command line.
// It serves as a practical example of handling asynchronous operations in JavaScript, particularly in the context of web development and API consumption.
// The use of the 'bl' module simplifies the process of collecting data from streams, making it easier to work with HTTP responses in a more manageable way.
// This code can be extended or modified to include additional functionality, such as processing the response data further or handling different types of responses based on the content type.
// Overall, this code snippet is a great starting point for anyone looking to understand asynchronous programming in Node.js and how to work with HTTP requests and responses effectively.