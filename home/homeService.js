var app = angular.module('longhornSublease');

app.service('homeService', function(fb, $stateParams, $http, $q){

	this.getWeather = function () {
		// var dfd = $q.defer();
		// var results = [];
		return $http ({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip=78705,us&APPID=28d25b033c2c70b7dfba5d53304ada2d'
		})
		// .then(function (data) {
		// 	results.description = data.data.weather[0].description;
		// 	console.log(results.description);
		// 	dfd.resolve(results);
		// 	return dfd.promise;
		// });
	};

});