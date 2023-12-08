var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./database');
var server = express();



// engine setup

server.set('views', __dirname);
server.set('view engine', 'ejs');
server.get('/', function(req, res) {
    res.render('index')
});

server.get('/search', function(req, res) {
    db.query('SELECT country_name FROM countries WHERE country_name LIKE "%' + req.query.term + '%"', 
    function(err, rows, field) {
        if(err) return;
        var data = [];

        for(i =0; i< rows.length; i++){
            data.push(rows[i].country_name);
        }
        res.end(JSON.stringify(data))
    })

})

const port = process.env.port || 8080
server.listen(port, function() {
    console.log(`node is running on port ${port}`)
})

module.exports  = server;