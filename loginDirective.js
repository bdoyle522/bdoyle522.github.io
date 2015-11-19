var app = angular.module('longhornSublease');

app.directive('logoutButton', function(){
	return {
		restrict: 'A',
		scope: {
			loggedIn: '=',
			thing: '='
		},
		controller: function($scope, loginService){
			$scope.thing = 'Login';
			$scope.loggedIn = loginService.getAuth();
			console.log($scope.loggedIn);
		},
		link: function(scope, elements, attributes, loginService){
			elements.css('display', 'none');
			console.log(elements);
			if(scope.loggedIn){
				elements.css('display', 'inline');
			}
		}
	}
});