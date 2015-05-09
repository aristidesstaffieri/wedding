
/**
 * Module dependencies.
 */

var express = require('express'),
  nodemailer = require('nodemailer'),
  routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

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

//remove if you don't end up having support emails
//support emails
var smtpTransport = nodemailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: "aristides@aristidesstaffieri.com",
pass: "0o1q9i2w"
}
});

app.post('/sendSupportEmail',function(req,res){
  var mailOptions={
    to : 'aristides@aristidesstaffieri.com',
    from: req.body.userEmail,
    subject : 'SUPPORT EMAIL',
    text : req.body.emailMessage.text
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
    console.log(error);
    res.send(error);
    res.end();
    }else{
    console.log('Message sent: ' + response.message);
    res.end('success');
    }
    });
});


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
