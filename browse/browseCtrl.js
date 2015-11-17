var app = angular.module('longhornSublease');

app.controller('browseCtrl', function($scope, $firebaseArray, $firebaseObject, listingsRef){
	
	$scope.listings = $firebaseArray(listingsRef);

	
	

	$scope.order = function () {
		$scope.predicate = 'Location';
		console.log($scope.listings);
	};
	
});