var app = angular.module('longhornSublease');

app.service('postService', function($firebase, $http, $q){



	var locations = ['West Campus', "North Campus", "Riverside"];
	var sexOptions = ['Male', 'Female', 'Coed'];
	var bathrooms = ['Private', 'Shared'];
	var petOptions = ['No Pets', 'Pets Allowed (No Deposit)', 'Pets Allowed (Deposit Required)'];

	this.getLocations = function() {
		return locations;
	};

	this.getOptions = function () {
		return sexOptions;
	};

	this.getBathrooms = function () {
		return bathrooms;
	};

	this.getPetOptions = function () {
		return petOptions;
	}

	// this.postListing = function(user) {
		
	// }



});