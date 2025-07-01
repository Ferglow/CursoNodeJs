'use strict'
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})

// This code uses the 'http' module to make a GET request to a URL provided as a command line argument.
// It pipes the response data into the 'bl' module, which collects all the data and provides it as a single buffer.
// The code then converts the buffer to a string, logs its length, and prints the string itself to the console.
// To run this code, you need to have Node.js installed and run it with a URL as an argument, like so:
// node http-collect.js http://example.com
// Make sure to replace 'http://example.com' with the actual URL you want to fetch.         