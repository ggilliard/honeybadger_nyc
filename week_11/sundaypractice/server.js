const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.get('/', function (req, res) {
    res.send('Hello Serene');
});

app.get('/sayHello', function (req, res) {
    const name = req.query.name
    res.send(`Hello ${name}`);
});

app.get('/teamName/:name', function (req, res) {
    const teamName = req.params.name;
    res.send(`Hello ${teamName}`);
});
   
app.listen(3200)