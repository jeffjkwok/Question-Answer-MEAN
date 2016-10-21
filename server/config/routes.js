// require controllers here
var session = require('./../controllers/sessionController.js')
var question = require('./../controllers/questionController.js')
// 
module.exports = function(app){
	app.post('/login', session.login);
	app.get('/logout', session.logout);
	app.get('/checkUser', session.checkUser);
	app.get('/showQuestions', question.showQuestions);
	app.get('/showQuestion/:id', question.showQuestion);
	app.post('/postQuestion', question.postQuestion);
	app.post('/postAnswer', question.postAnswer);
	app.put('/like/:id', question.like)
}