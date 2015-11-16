var app = angular.module('longhornSublease');

app.service('browseService', function(fb, $stateParams){

	this.getListings = function () {
		return new Firebase(fb.url);
	};

});