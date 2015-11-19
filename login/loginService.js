var app = angular.module('longhornSublease');

app.service('loginService', function (fb, $firebaseAuth) {


	var ref = new Firebase(fb.url);
	var auth = $firebaseAuth(ref);
	
	this.signup = function (newUser) {
		return auth.$createUser(newUser);
	};

	this.getAuth = function () {
		return auth.$getAuth();
	};

	this.login = function(user) {
		return auth.$authWithPassword(user);
	};

	this.logout = function () {
		return auth.$unauth();
	};

	
})