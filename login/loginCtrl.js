var app = angular.module('longhornSublease');

app.controller('loginCtrl', function($scope, loginService, $state){

	$scope.createUser = function(user) {
		console.log(user);
		loginService.signup(user).then(function(res){
			alert('You have successfully created your account');
			$state.go('home');
		});
	};

	$scope.log = function(user) {
		loginService.login(user).then(function(res){
			$state.go('home');
		});
	};

});