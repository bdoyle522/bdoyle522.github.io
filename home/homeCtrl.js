var app = angular.module('longhornSublease');

app.controller('homeCtrl', function($scope, currentWeather){

	var randyQuotes = [
		"Yeah, let's do that! We've got an economy in the toilet, a big election coming up, but this country's #1 priority should be making football safer!",
		"Oh, they'd love it! A sport where safety is all that matters? How about we call it sarcastaball?!",
		"Yeah, sure, because people just order stuff from Amazon and forget what they got.",
		'How many copies of "Meet the Fockers" do we have, Shelly?',
		"STAAAAAAAN"
	];

	$scope.randy = function(){
		$scope.randyQuote = '"' + randyQuotes[Math.floor(Math.random()*randyQuotes.length)] + '"';
		$scope.showQuote = !$scope.showQuote;
	};


	$scope.weather = currentWeather.data.weather;


});