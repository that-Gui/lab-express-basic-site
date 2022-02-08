const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


// home Route
app.get('/home', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/public/views/home.html');
});

// about Route
app.get('/about', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/public/views/about.html');
  });

// about Route
app.get('/works', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/public/views/works.html');
  });

//
app.listen(3000, () => console.log('Server running on port 3000!'));