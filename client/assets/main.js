var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '/partials/login.html'
	})
	.when('/dashboard', {
		templateUrl: '/partials/dash.html'
	})
	.when('/new_question',{
		templateUrl: '/partials/new.html'
	})
	.when('/question/:id',{
		templateUrl: '/partials/show.html'
	})
	.when('/question/:id/new_answer',{
		templateUrl: '/partials/new_answer.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})