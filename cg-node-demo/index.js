const express = require('express');
const app = express();
const port = 8084;

app.get('/', (request, response) => {
    response.send(`Welcome to my first node app.`);
    console.log(`Welcome 😜😜😜`);

});

app.get('/home', (request, response) => {
    response.send(`Welcome to homepage.`);
    console.log(`Welcome 😜😜`);

});
app.get('/login', (request, response) => {
    response.send(`Welcome to login page.`);
    console.log(`Welcome 😜`);

});
app.listen(port, () => {
    console.log(`App is running...`);

});

// go to CMD and run - 
// NPM start
//http://4localhost:8084/