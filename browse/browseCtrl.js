var app = angular.module('longhornSublease');

app.controller('browseCtrl', function($scope, $firebaseArray, $firebaseObject, listingsRef){
	
	$scope.listings = $firebaseArray(listingsRef);
	
});