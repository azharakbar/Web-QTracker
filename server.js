var express = require('express') ;
var app = express() ;

var port = 12345 ;
app.use( express.static(__dirname + '/public') );

app.get('/' , function( req , res ){
	res.sendFile ('/home/user/Desktop/WEB QTRACKER/index.html')	;
}) ;

app.listen ( port , function(){
	console.log(`Server Listening To ${port}`);
}) ; 