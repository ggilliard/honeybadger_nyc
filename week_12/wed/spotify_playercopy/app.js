const express = require('express');
const logger = require('morgan');
const request = require('request-promise');
const {clientId, clientSecret}= require('./api_key');
const app = express();

app.use(logger('dev'));

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + (new Buffer(`${clientId}:${clientSecret}`).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

app.get('/', function(req, res) {
    request(authOptions).then(function(data) {
        res.send(data.access_token)
    })
});


app.listen(3000, function() {
    console.log('Listening on port 3000');
});