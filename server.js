var express = require('express'),
	app = express(),
	bp = require('body-parser'),
	path= require('path'),
	session = require('express-session'),
	root= __dirname, 
	port = process.env.PORT || 8000;

app.set('trust proxy', 1)
app.use(session({
	secret: 'grumpy cat',
	resave: false,
	saveUnitialized: true,
	cookie: {secure: false}
}))

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function(){
	console.log(`Server is running on ${port}`)
})