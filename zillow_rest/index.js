//index.js simple rest generator

'use strict';

var http            = require('http'),
    restify         = require('restify'),
    fs              = require('fs');

//ReST
var port = process.env.PORT || 3000;
var restify = require('restify');

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer({
    name: 'zillow-rest',
    version: '0.0.1'
});


server.use(restify.acceptParser(server.acceptable));
server.use(restify.jsonp());
server.use(restify.bodyParser({ mapParams: true }));

server.get('/', restify.serveStatic({
    directory: './public/',
    default: 'index.html'
}));

server.get('/automobiles', function(req, res, next){
    res.send(
        {
            automobiles:[
                {"mpg":25, "price":11000, "name":"Subcompact"}, {"mpg":16, "price":36400, "name":"Sports"}, {"mpg":25, "price":16500, "name":"Compact"}, {"mpg":22, "price":72000, "name":"Luxury"}
            ]
        }
    );
    return next();
});


server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
});
