var app = angular.module('longhornSublease');

app.controller('postingCtrl', function($scope, postingService, postingRef, $firebaseObject){


	var listing = $firebaseObject(postingRef);
	listing.$bindTo($scope, 'listing');
	$scope.listing = listing;
	console.log(listing);



});