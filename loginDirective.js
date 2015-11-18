var app = angular.module('longhornSublease');

app.directive('loginValidation', function(){
	return {
		require: 'ngModel',
		scope: {
			passwordVerify: '='
		},
		link: function(scope, elements, attributes, ctrl){
			var me = attrs.ngModel;
			var matchTo = attrs.pwCheck;

			scope.$watch('[me, matchTo', function(value){
				ctrl.$setValidity('pwmatch', scope[me] === scope[matchTo]);
			});
		}
	}
});