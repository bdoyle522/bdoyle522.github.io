var app = angular.module('longhornSublease');

app.controller('browseCtrl', function($scope, $firebaseArray, $firebaseObject, listingsRef){
	
	$scope.listings = $firebaseArray(listingsRef);

	$scope.order = function () {
		$scope.predicate = 'Location';
		console.log($scope.listings);
	};

	// var buildings = [
	// 'http://video.aia.org/aiaawards/2013/2013-housingawards/WastCampusHousing/i/photo1.jpg',
	// 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcrCNGZlejZhmwrh0QRDkVLb553s9ZubgnUYyVBx11rmMHN_l',
	// 'http://www.apartmentwiz.com/austin_apartments/images/austin_apartments_images/austin_west_campus_apartments/734_austin_west_campus_apartments_1.jpg',
	// 'http://www.apartmentwiz.com/austin_apartments/images/austin_apartments_images/austin_west_campus_apartments/730_austin_west_campus_apartments_1.jpg'
	// ];

	// $scope.browseImage = {
	// 	$scope.browseImage = buildings[Math.floor(Math.random()*buildings.length)];
	// }
	
});