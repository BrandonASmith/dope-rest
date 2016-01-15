var express = require('express'),
	menuRoutes = express.Router();


menuRoutes.get('/', function(req,res){
	console.log('index');
	res.send('index')	
})



module.exports = menuRoutes