var app = angular.module('longhornSublease');

app.service('postService', function($firebase){

	var locations = ['West Campus', "North Campus", "Riverside"];
	var sexOptions = ['Male', 'Female', 'Coed'];
	var bathrooms = ['Private', 'Shared'];
	var petOptions = ['No Pets', 'Pets Allowed (No Deposit)', 'Pets Allowed (Deposit Required)'];
	var washOptions = ['Built In Washer/Dryer','Community Laundry Room', 'None'];

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
	};

	this.getWashOptions = function () {
		return washOptions;
	};

	// this.getDate = function(date){
	// 	var dates = []
	// 	var dates.day = date.getDate();
	// 	var dates.month = date.getMonth() + 1;
	// 	var dates.year = data.getFullYear();
	// 	return dates;
	// }





});