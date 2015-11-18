var app = angular.module('longhornSublease');

app.service('postingService', function($firebaseArray, $firebaseObject, fb, $stateParams){

	
	this.getPost = function (postId) {
		//console.log(postId);
		return new Firebase(fb.url + postId);
	};

});