var express = require('express'),
	menuRoutes = express.Router(),
	bodyParser = require('body-parser'),
	menusController = require('../../controllers/menus');

//menuRoutes.get('/', function(req,res){
	//console.log('index');
	//menusController.getAll
//})

menuRoutes.route('/')
	.get(menusController.getAll)



module.exports = menuRoutes