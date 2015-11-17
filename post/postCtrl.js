var app = angular.module('longhornSublease');

app.controller('postCtrl', function($scope, postService, $firebaseArray, $firebaseObject){

	$scope.locations = postService.getLocations();

	$scope.sexes = postService.getOptions();

	$scope.bathrooms = postService.getBathrooms();

	$scope.petOptions = postService.getPetOptions();

	$scope.washOptions = postService.getWashOptions();

	
	var ref = new Firebase('https://longhornsublease.firebaseio.com/posts');
	var listing = $firebaseArray(ref);

	$scope.submitApartment = function(newApartment) {
		newApartment.startDate = dateConvert($scope.dt.start);
		newApartment.endDate = dateConvert($scope.dt.end);
		console.log(newApartment);
		listing.$add({
			newApartment
		}).then(function(ref){
			alert('Your sublet has been successfully added!');
		}).catch(function(err){
			alert('err');
		});
	};

	var dateConvert = function(date){
		var stringDate = [];
		stringDate.day = date.getDate();
		stringDate.month = date.getMonth()+1;
		stringDate.year = date.getFullYear();
		return stringDate;
	}

	$scope.today = function() {
    	$scope.dt = new Date();
  	};
  	$scope.today();

  	$scope.clear = function () {
    	$scope.dt = null;
  	};

  	$scope.toggleMin = function() {
    	$scope.minDate = $scope.minDate ? null : new Date();
  	};
  	$scope.maxDate = new Date(2020, 5, 22);

  	$scope.open = function($event) {
    	$scope.status.opened = true;
  	};

  	$scope.setDate = function(year, month, day) {
    	$scope.dt = new Date(year, month, day);
  	};


  	$scope.dateOptions = {
    	formatYear: 'yy',
    	startingDay: 1
  	};

  	$scope.format = 'dd-MMMM-yyyy';

  	$scope.status = {
   		opened: false
  	};

  	var tomorrow = new Date();
  	tomorrow.setDate(tomorrow.getDate() + 1);
  	var afterTomorrow = new Date();
  	afterTomorrow.setDate(tomorrow.getDate() + 2);
  	$scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

    $scope.disabled = function(date, mode) {
    	return ( mode === 'day' && ( today.getDay()) );
  	};

  	$scope.getDayClass = function(date, mode) {
    	if (mode === 'day') {
      		var dayToCheck = new Date(date).setHours(0,0,0,0);

      		for (var i=0;i<$scope.events.length;i++){
        		var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        		if (dayToCheck === currentDay) {
          			return $scope.events[i].status;
        		}	
      		}
    	}

    return '';
  	};

	


});