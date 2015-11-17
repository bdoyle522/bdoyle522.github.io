var app = angular.module('longhornSublease', ['ui.router', 'firebase', 'ngAnimate']);

app.constant('fb', {
	url: 'https://longhornsublease.firebaseio.com/posts/'
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
		})
		.state('posting', {
			url: '/posts/:postId',
			templateUrl: 'posting/postingTmpl.html',
			controller: 'postingCtrl',
			resolve: {
				postingRef: function($stateParams, postingService){
					console.log($stateParams.postId);
					return postingService.getPost($stateParams.postId);
				},
			}
		});

	$urlRouterProvider.otherwise('/');
});