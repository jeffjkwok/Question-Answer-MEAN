app.factory('questionFactory', ['$http', function($http){
	var factory = {}
	factory.showQuestions = function(callback){
		$http.get('/showQuestions').then(function(returnedData){
			callback(returnedData.data.questions)
		})
	}
	factory.showQuestion = function(id, callback){
		$http.get('/showQuestion/'+id).then(function(
			returnedData){
			callback(returnedData.data.question)
		})

	}
	factory.postQuestion = function(question, callback){
		$http.post('/postQuestion', question).then(function(returnedData){
			callback()
		})
	}
	factory.postAnswer = function(answer, id, callback){
		$http.post('/postAnswer', {answer: answer, id: id}).then(function(returnedData){
			callback()
		})
	}
	factory.like = function(id, likes, callback){
		likes += 1; 

		$http.put('/like/'+id, {$set: {likes: likes}}).then(function(returnedData){
			callback()
		})
	}
	return factory
}])