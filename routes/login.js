/*
 * GET home page.
 */

// Getting our favour data
var data = require('../data.json');
var user = require('../user.json');

exports.view = function( req, res ) {
	

	res.render( 'login', data );
}

exports.write = function(req, res){
	var name = req.body.name;
	var image = req.body.image;

console.log(name);
console.log(image);

	user.user.name = name;
	user.user.image = image;

	for(i=0; i<data.favours.length; i++){ //change all to current user and image
		if(data.favours[i].name==="currentUser"){
			data.favours[i].name = name;
			data.favours[i].image = image;
		}
	}

	res.send(user.user);

	res.redirect('/index');
}