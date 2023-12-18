//  HOW TO READ FILE IN OS....
// const fs = require('fs');



//  fs.readFile('./file.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//  }
//   console.log(data);
// });


// const content = 'Here is the content to write to the file';

// fs.writeFile('./write.txt', content, err => {
//   if (err) {
//     console.error(err);
//     return
//   }
//   //file writen succesfully
// });


// fs.unlink('./write.txt', (err) => {
//   if (err) {
//     console.error(err);
//     return
//   }
//   console.log('success!!');
//});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CREATING MY OWN SERVER 

const http = require('http');

const host = '127.0.0.1';
const port = 5000;

const Server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader = ('content-Type', 'application/json');

  const serializadData = JSON.stringify({
    name: " Daniel",
    age: 23,
    country: "Nigeria"
  });

  res.write(serializadData);
  res.end();
});
Server.listen(port, host, () => {
  console.log(`server is running on ${port}`);
});
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////error handing in the server///


// const http = require('http');

// const host = '127.0.0.1';
// const port = '5000';

// const Server = http.createServer((req, res) => {
//   res.on('error', (err) => {
//     console.log('An error has occured');
//   });
//   res.on('error', (err) => {
//     console.log('An error has Ocured !!');
//   });
// });

// Server.listen(port, host, () => {
//   console.log(`Server is running on ${port}`);
// });


//////////////////////////////////////////////////////////////////////////////////////////////////// error handing on server

// const http = require('http');

// const host = '127.0.0.1';
// const port = '5000';

// const server = http.createServer((req, res) => {
//   const urlpath = req.url;

//   if (urlpath === '/') {
//     res.statusCode = 200;
//     res.setHeader('content-Type', 'text/plain');
//     res.end('Hello  from my website');

//   } else if (urlpath === '/about') {
//     res.statusCode = 200;
//     res.setHeader('content-type', 'text/plain');
//     res.end('this is the about page!');

//   } else if (urlpath === '/users') {
//     res.statusCode = 200;
//     res.setHeader('content-Type', 'text/plain');
//     res.end('we are here!');

//   } else {
//     res.statusCode = 400;
//     res.setHeader('content-Type', 'text/plain');
//     res.end('Page not found !!'); 
//   }
// });

// server.listen(port, host, () => {
//   console.log(`server is running on ${port}`);
// });


// ///////////////////////////////////////   MAKING RESPONSE TO TOTHER SERVER,

// const http = require('http');

// const request= http.get('http://www.Google.com', (response) => {
//   console.log(`status code:${response.statusCode}`);
//   console.log(`Headers:${response.headers}`);

//   response.on('data', (chunk) => console.log(`chunk received:${chunk}`));
// });

// request.on('error', (err) => console.error(err)); 