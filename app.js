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

			}
		})
		.state('postSublet', {
			url: '/postSublet',
			templateUrl: 'post/postTmpl.html',
			controller: 'postCtrl',
		});



	$urlRouterProvider.otherwise('/');
});