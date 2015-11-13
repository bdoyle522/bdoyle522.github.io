var app = angular.module('longhornSublease');

app.controller('postCtrl', function($scope, postService){

	$scope.locations = postService.getLocations();

	$scope.sex = postService.getOptions();

	$scope.bathrooms = postService.getBathrooms();


});