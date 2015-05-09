
/*
 * ROUTES
 */

 exports.partials = function(req, res) {
 	var filename = req.params.filename;
 	res.render('../public/views/' + filename);
 };

 exports.index = function(req, res){
 	res.render('layout');
 };

 exports.home = function(req, res){
 	console.log(req.body.uid);
 	if(req.body.uid == null || req.body.uid == undefined) {
 		res.send('Unauthenticated');
 	} else {
 		var FirebaseTokenGenerator = require("firebase-token-generator");
		var tokenGenerator = new FirebaseTokenGenerator("V74k0Cza5rKowsXJJbTfasjJKnTPZsi7YA4nmqjA");
		var token = tokenGenerator.createToken({uid: req.body.uid, data: req.body});
		res.send('Authenticated');

 	}
 };

 exports.contacts = function(req, res){
 	console.log(req.body.uid);
 	if(req.body.uid == null || req.body.uid == undefined) {
 		res.send('Unauthenticated');
 	} else {
 		var FirebaseTokenGenerator = require("firebase-token-generator");
		var tokenGenerator = new FirebaseTokenGenerator("V74k0Cza5rKowsXJJbTfasjJKnTPZsi7YA4nmqjA");
		var token = tokenGenerator.createToken({uid: req.body.uid, data: req.body});
		res.send('Authenticated');

 	}
 };

  exports.messages = function(req, res){
 	console.log(req.body.uid);
 	if(req.body.uid == null || req.body.uid == undefined) {
 		res.send('Unauthenticated');
 	} else {
 		var FirebaseTokenGenerator = require("firebase-token-generator");
		var tokenGenerator = new FirebaseTokenGenerator("V74k0Cza5rKowsXJJbTfasjJKnTPZsi7YA4nmqjA");
		var token = tokenGenerator.createToken({uid: req.body.uid, data: req.body});
		res.send('Authenticated');

 	}
 };

   exports.support = function(req, res){
 	console.log(req.body.uid);
 	if(req.body.uid == null || req.body.uid == undefined) {
 		res.send('Unauthenticated');
 	} else {
 		var FirebaseTokenGenerator = require("firebase-token-generator");
		var tokenGenerator = new FirebaseTokenGenerator("V74k0Cza5rKowsXJJbTfasjJKnTPZsi7YA4nmqjA");
		var token = tokenGenerator.createToken({uid: req.body.uid, data: req.body});
		res.send('Authenticated');

 	}
 };

 exports.profile = function(req, res){
 	console.log(req.body.uid);
 	if(req.body.uid == null || req.body.uid == undefined) {
 		res.send('Unauthenticated');
 	} else {
 		var FirebaseTokenGenerator = require("firebase-token-generator");
		var tokenGenerator = new FirebaseTokenGenerator("V74k0Cza5rKowsXJJbTfasjJKnTPZsi7YA4nmqjA");
		var token = tokenGenerator.createToken({uid: req.body.uid, data: req.body});
		res.send('Authenticated');

 	}
 };
