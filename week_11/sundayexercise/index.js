const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));


app.get('/', function (req, res) {
    res.send('/');
});

app.get('/about', function (req, res) {
    res.send('This is Page About Joke');
});

app.get('/bananas', function (req, res) {
    res.send('');
});

app.get('/joke', function (req, res) {
    res.send('/');
});

app.get('/joke/:name', function (req, res) {
    res.send('/');
});

app.listen(300)

//CREATE A NEW APPLICATION INSIDE A JOKES_APP FOLDER
// CREATE A PACKAGE JSON
// INSTALL EXPRESS // MORGAN
// HAVE THE APP LISTEN ON PORT 3000
// YOU SHOULD HAVE THE FOLLOWING ROUTES

// '/about' should give a brief description about the application
// '/bananas' should give a joke about bananas
// '/joke' should return a random joke (out of 3 jokes)
// '/joke/:name' should return a personalized joke