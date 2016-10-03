(function () {
'use strict';

angular.module('AngApp', [])
.controller('AngAppController', AngAppController)
.filter('loves', LovesFilter);

AngAppController.$inject = ['$scope','lovesFilter'];
function AngAppController($scope,lovesFilter) {
	$scope.message = "Press 'Check If Too Much' button to Evaluate";

	$scope.evaluate = function () {
		$scope.evaluation = sayMessage();		
	};



	$scope.sayMessage = function()
	{
		return $scope.message;
	};

	$scope.sayLovesMessage = function()
	{
		return lovesFilter("I likes this");
	};	
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