const args = process.argv.slice(2);

const request = require('request');
const fs = require('fs');

request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  let size = body.length;
  let fileName = args[1];

  fs.writeFile(fileName, body, err => {
    if (err){
      console.log(err);
    }
    console.log(`Downloaded and saved ${size} bytes to ${fileName}.`);
  })

});