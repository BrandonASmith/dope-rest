var express		= require('express'),
	app			= express(),
	logger		= require('morgan'),
	bodyParser  = require('body-parser'),
	mongoose  	= require('mongoose'),
	port		= process.env.PORT || 3000,
	menuRouter	= require ('./config/routes/menu.js')

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/dope_rest')

app.use( '/menu', menuRouter )



app.listen(port)
console.log('Server started on', port)




