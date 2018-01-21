const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.get('/about', function (req, res) {
    res.send('This is Page About Joke');
});

app.get('/bananas', function (req, res) {
    res.send('Banana Joke Holder');
});

app.get('/joke', function (req, res) {
    const jokes = ['JOKE 1', 'JOKE 2', 'JOKE 3']
    const index = Math.floor(Math.random * Math.floor(2))
    res.send(jokes[index]);
});

app.get('/joke/:name', function (req, res) {
    const name = req.params.name;
    res.send(`Funny Joke For ${name}`);
});
//http://localhost:3000/joke/Gina
app.listen(3000)

//CREATE A NEW APPLICATION INSIDE A JOKES_APP FOLDER
// CREATE A PACKAGE JSON
// INSTALL EXPRESS // MORGAN
// HAVE THE APP LISTEN ON PORT 3000
// YOU SHOULD HAVE THE FOLLOWING ROUTES

// '/about' should give a brief description about the application
// '/bananas' should give a joke about bananas
// '/joke' should return a random joke (out of 3 jokes)
// '/joke/:name' should return a personalized joke