(function(){
	"use strict"

	var express 	= require('express'),
		app 		= express(),
		http 		= require('http').Server(app);

	/* Make public directory access by statically using node server */
	app.use(express.static(__dirname + '/public'));
	
	/* Listen express server on port 3000 */
	http.listen(3000, function(){
	    console.log("Listening on server_port " + 3000);
	});	
}());