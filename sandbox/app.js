(function () {
'use strict';

angular.module('AngApp', [])
.controller('AngAppController', AngAppController)
.filter('loves', LovesFilter);

AngAppController.$inject = ['$scope','$http'];
function AngAppController($scope,$http) {
	$http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });	
}


function LovesFilter()
{
	return function (input) {
		input = input || "";
		input = input.replace("likes","loves")
		return input;
	};
}



})();