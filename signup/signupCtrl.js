var app = angular.module('longhornSublease');

app.controller('signupCtrl', function($scope, loginService, $state){

	$scope.createUser = function(user) {
		console.log(user);
		loginService.signup(user).then(function(){
			if(!user.email.includes('.edu')){
				alert("Must use college email address to register");
				$state.go('login');
			}
			else{
				alert('You have successfully created your account');
				$state.go('home');
			}

		}).catch(function(error){
			alert(error);
		})
	};

});
