const net = require('net');
const needle = require('needle');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

const fetching = function (hostnameURL, localFilePath) {
  // console.log(`fetching`)
  if (!localFilePath) {
    return console.log("missing local file path.")
  }
  needle.get(hostnameURL, (error, response, body) => {
    // console.log(`fetching ${error}`)
    if (error) {
      return console.log(`failed to utilize a parameter passed in an argument: ${error}`)
    }
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile(`${localFilePath}`, body, () => { console.log(`Downloaded and saved ${body.length} bytes`) })
  })// .catch(err){ console.log(err) };
}

fetching(url, filePath);
