var express		= require('express'),
	app			= express(),
	logger		= require('morgan'),
	bodyParser  = require('body-parser'),
	mongoose  	= require('mongoose'),
	port		= process.env.PORT || 3000,
	menuRouter	= require ('./config/routes/menu.js')


app.use( '/menu', menuRouter )



app.listen(port)
console.log('Server started on', port)




