var app = angular.module('longhornSublease', ['ui.router', 'firebase', 'ngFileUpload', 'ui.bootstrap','ui.bootstrap.datepicker']);

app.constant('fb', {
	url: 'https://longhornsublease.firebaseio.com/posts/'
});

app.run(["$rootScope", "$state", function($rootScope, $state) {
	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
  	// We can catch the error thrown when the $requireAuth promise is rejected
  	// and redirect the user back to the home page
  		if (error === "AUTH_REQUIRED") {
    	$state.go('login');
  	}
	});
}]);


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
			resolve: {
				currentAuth: function(Auth){
					return Auth.$requireAuth();
				},
			}
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
		})
		.state('login', {
			url: '/login',
			templateUrl: 'login/loginTmpl.html',
			controller: 'loginCtrl'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'signup/signupTmpl.html',
			controller: 'signupCtrl'
		});

	$urlRouterProvider.otherwise('/');
});
