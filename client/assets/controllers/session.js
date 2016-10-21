app.controller('sessionController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location){
	$scope.login = function(){
		if(!$scope.user || $scope.user.length < 3){
			alert('Name cannot be less than 3 characters!')
		} else {
			userFactory.login($scope.user, function(){
				$location.url('/dashboard')
			})
		}
	}
	userFactory.checkUser(function(data){
		$scope.currentUser = data
		if(!$scope.currentUser){
			$location.url('/')
		}
	})
}])