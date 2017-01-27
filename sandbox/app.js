(function () {
'use strict';

angular.module('AngApp', [])
.controller('AngAppController', AngAppController);

AngAppController.$inject = ['$scope','$http'];
function AngAppController($scope,$http) {
	var narrow = this;

	narrow.FindItems = function () {
		console.log("here");

		$http.get('http://rest-service.guides.spring.io/greeting').
		    then(function(response) {
		        $scope.greeting = response.data;
		        console.log(response.data);
		    });			
	};

}


})();