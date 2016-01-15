# STEP ONE

1. npm init/install
2. In app.js

```
var express		= require('express'),
	app			= express(),
	logger		= require('morgan'),
	bodyParser  = require('body-parser'),
	mongoose  	= require('mongoose'),
	port		= process.env.PORT || 3000



	app.listen(port)
	console.log('Server started on', port)
```