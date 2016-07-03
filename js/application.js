var mymodule = angular.module("mymodule",['ngRoute']);

mymodule.config(function($routeProvider) {
$routeProvider


			.when('/', {
				templateUrl : 'home.html',
				controller  : 'mainController'
			})


			.when('/userdetails', {
				templateUrl : 'details.html',
				controller  : 'detailsController'
			})

			;
	});


mymodule.controller("mainController",PostsCtrlAjax);
    function PostsCtrlAjax($scope, $http,$rootScope) {

        $http({
            method: 'GET',
            url: 'fotolog.json'
        }).success(function(data) {
            $scope.pics = data; // response data
        });
$scope.hh = "More";
$scope.save=function(id1,id2,id3,id4,id5,id6,id7,id8){
$rootScope.user_id = id1;
$rootScope.user_id_link = id2;

$rootScope.joining_date = id6;
$rootScope.user_image = id7;
$rootScope.user_city = id4;
$rootScope.user_state = id3;
$rootScope.sex_details = id5;
$rootScope.country = id8;


}

$scope.toggle = true;


$scope.IsVisible = false;
$scope.some = function() {
$scope.hh = "Less";

$scope.IsVisible = !$scope.IsVisible;


}
  }



	mymodule.controller('detailsController',kaka);
	 function kaka($scope,$http,$rootScope) {
		 $scope.mm1=$rootScope.user_id ;
		 $scope.mm2=$rootScope.user_id_link;

		 $scope.mm6=$rootScope.joining_date;
		 $scope.mm7=$rootScope.user_image;
		 $scope.mm4=$rootScope.user_city;
		 $scope.mm3=$rootScope.user_state;
		 $scope.mm5=$rootScope.sex_details;
		 $scope.mm8=$rootScope.country;





	}
