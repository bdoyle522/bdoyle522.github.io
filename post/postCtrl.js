var app = angular.module('longhornSublease');

app.controller('postCtrl', function($scope, postService, $firebaseArray, $firebaseObject){

	$scope.locations = postService.getLocations();

	$scope.sexes = postService.getOptions();

	$scope.bathrooms = postService.getBathrooms();

	$scope.petOptions = postService.getPetOptions();

	$scope.washOptions = postService.getWashOptions();

	
	var ref = new Firebase('https://longhornsublease.firebaseio.com/');
	var listing = $firebaseArray(ref);

	$scope.submitApartment = function(newApartment) {
		listing.$add({
			newApartment
		}).then(function(ref){
			alert('Your sublet has been successfully added!');
		});
	};
	


});