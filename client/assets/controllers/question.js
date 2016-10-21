app.controller('questionController', ['$scope', 'questionFactory', '$location', '$routeParams', function($scope, questionFactory, $location, $routeParams){
	$scope.postQuestion = function(){
		// console.log($scope.question)
		if(!$scope.question || $scope.question.question.length < 10){
			alert('Question must be at least 10 characters!');
		} else {
			$scope.question.username = $scope.currentUser.username
			questionFactory.postQuestion($scope.question, function(){
				$location.url('/dashboard')
			})
		}
	}
	$scope.postAnswer = function(id){
		if($scope.answer == undefined || $scope.answer.answer.length < 5){
			alert('Answer must be longer than 5 characters!');
		} else {
			$scope.answer.likes = 0;
			$scope.answer.username = $scope.currentUser.username;
			questionFactory.postAnswer($scope.answer, id, function(){
				$location.url('/dashboard')
			})
		}

	}
	$scope.like = function(id, likes){
		questionFactory.like(id, likes, function(){
			showQuestion()
		})
	}
	$scope.toQuestion = function (id){
		$location.url('/question/'+id)
	}
	$scope.toAnswer = function(id){
		$location.url('/question/'+id+'/new_answer')
	}

	function showQuestions(){
		questionFactory.showQuestions(function(data){
			$scope.displayQuestions = data
		})
	}
	showQuestions()

	function showQuestion(){
		if($routeParams.id){
			questionFactory.showQuestion($routeParams.id, function(data){
				$scope.theQuestion = data
			})
		}
	}
	showQuestion()


}])