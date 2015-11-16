var app = angular.module('longhornSublease');

app.service('homeService', function(fb, $stateParams, $http, $q){

	this.getWeather = function () {
		var dfd = $q.defer();
		$http ({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip=78705,us&APPID=28d25b033c2c70b7dfba5d53304ada2d'
		}).then(function(response){
			var weather = interpret(response['data']['weather']);
			dfd.resolve(weather);
			console.log(weather);
		});
		return dfd.promise;
	};

	// this.getIcon = function () {
		
	// }

	function interpret(response){
		var result = [];
		console.log(response[0]);

		result.id = response[0]['id'];
		result.main = response[0]['main'];
		result.description = response[0]['description'];
		result.icon = response[0]['icon'];
		return result;
	}

});