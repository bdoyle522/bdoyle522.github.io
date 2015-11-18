var app = angular.module('longhornSublease');

app.service('postingService', function($firebaseArray, $firebaseObject, fb, $stateParams){

	this.getPost = function (postId) {
		return new Firebase(fb.url + postId);
	};

});