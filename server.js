// Require express from NPM
const express = require('express');

//Get an application insstance with the app variable
const app = express();

const port = 3000;
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// takes place of simple server.
app.use(express.static(__dirname + '/public'));

let counter = '';

app.get('/api/increment', function(request, response){
    counter++
    response.send(`count:${counter}`);
});
app.get('/api/decrement', function(request, response){
    counter--
    response.send(`count:${counter}`);
});

app.get('/value', function(request, response){
    response.send(`count:${counter}`);
});
app.listen(port);