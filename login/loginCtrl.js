var app = angular.module('longhornSublease');

app.controller('loginCtrl', function($scope, loginService, $state){

	// $scope.createUser = function(user) {
	// 	console.log(user);
	// 	loginService.signup(user).then(function(){
	// 		alert('You have successfully created your account');
	// 		$state.go('home');
	// 	}).catch(function(error){
	// 		alert(error);
	// 	})
	// };

	$scope.log = function(user) {
		loginService.login(user).then(function(){
			//alert('You have successfully Logged In');
			$state.go('home');
		}).catch(function(error){
			alert(error);
		})
	};

});