var app = angular.module('longhornSublease');

app.service('postService', function($firebase){

	var locations = ['West Campus', "North Campus", "Riverside"];
	var sexOptions = ['Male', 'Female', 'Coed'];
	var bathrooms = ['1','2','3','4','5'];

	this.getLocations = function() {
		return locations;
	}

	this.getOptions = function () {
		return sexOptions;
	}

	this.getBathrooms = function () {
		return bathrooms;
	}

});