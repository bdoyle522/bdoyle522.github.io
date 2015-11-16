var app = angular.module('longhornSublease', ['ui.router', 'firebase']);

app.constant('fb', {
	url: 'https://longhornsublease.firebaseio.com/'
});

app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home/homeTmpl.html',
			controller: 'homeCtrl',
			resolve: {
				currentWeather: function (homeService, $stateParams){
							return homeService.getWeather();
						}
				},
		})
		.state('postSublet', {
			url: '/postSublet',
			templateUrl: 'post/postTmpl.html',
			controller: 'postCtrl',
		})
		.state('browse', {
			url: '/browse',
			templateUrl: 'browse/browseTmpl.html',
			controller: 'browseCtrl',
			resolve: {
				listingsRef: function(browseService, $stateParams) {
					return browseService.getListings();
				},
			}
		});

	$urlRouterProvider.otherwise('/');
});