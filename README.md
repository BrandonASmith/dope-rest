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
3. Create .gitignore // ignore node_modules

4. Created Router on app.js and the moved it to config/routes/menu.js

5. Create Procfile // add 

```
web: node app.js
```

6. follow Heroku markdown

7. build Schema

