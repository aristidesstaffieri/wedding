
/**
 * Module dependencies.
 */

var express = require('express'),
      nodemailer = require('nodemailer'),
      routes = require('./routes'),
      gm = require('googlemaps'),
      util = require('util');

var app = module.exports = express.createServer();

// Configuration

app.use(express.favicon(__dirname + '/public/views/favicon.ico')); 

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});



app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});


app.get('/:filename', routes.partials);
app.get('/', routes.index);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
