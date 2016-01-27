var app = angular.module('longhornSublease');

app.controller('postCtrl', function($scope, postService, $firebaseArray, $firebaseObject, $state){

	$scope.locations = postService.getLocations();

	$scope.sexes = postService.getOptions();

	$scope.bathrooms = postService.getBathrooms();

	$scope.petOptions = postService.getPetOptions();

	$scope.washOptions = postService.getWashOptions();

	$scope.parkOptions = postService.getParkOptions();

	var ref = new Firebase('https://longhornsublease.firebaseio.com/posts');
	var listing = $firebaseArray(ref);

	$scope.submitApartment = function(newApartment) {


		newApartment.startDate = dateConvert($scope.dt.start);
		newApartment.endDate = dateConvert($scope.dt.end);
		newApartment.photo = $scope.userUpload;
		console.log(newApartment);
		listing.$add({
			newApartment
		}).then(function(ref){
			alert('Your sublet has been successfully added!');
      $state.go('browse');
		}).catch(function(err){
			alert('err');
		});
	};

	 var dateConvert = function(date){
		var stringDate = {};
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

  	$scope.setDate = function(year, month, day) {
    	$scope.dt = new Date(year, month, day);
  	};

    $scope.date = '11/17/2015';


    //Image Upload
		$scope.fileChanged = function(){
			$scope.userUpload = {};
			var fr = new FileReader();
			var imgFileInput = document.getElementById('file-upload');
			var imgFile = imgFileInput.files[0];
			fr.readAsDataURL(imgFile);
			fr.onload = function(e){
				$scope.$apply(function() {
            $scope.userUpload = fr.result;
            console.log($scope.userUpload)
        });
			}
		}


});
