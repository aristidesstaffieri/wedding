
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
