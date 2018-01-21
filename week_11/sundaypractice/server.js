const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.get('/', function (req, res) {
    res.send('Hello World');
});
   
app.listen(3000)