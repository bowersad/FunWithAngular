(function () {
'use strict';

angular.module('AngApp', [])
.controller('AngAppController', AngAppController);

AngAppController.$inject = ['$scope'];
function AngAppController($scope) {
	$scope.lunch = "";
	$scope.evaluation = "Press 'Check If Too Much' button to Evaluate";

	$scope.evaluate = function () {
		$scope.evaluation = EvaluateLunch($scope.lunch);
	};

	function EvaluateLunch(lunch)
	{
		var evaluation;

		if (lunch == "")
		{
			evaluation = "Please enter data first";
		}		
		else
		{
			var lunchList = lunch.split(",");
			console.log(lunchList.length);
			if (lunchList.length <= 3)
			{
				evaluation = "Enjoy!";
			}
			else
			{
				evaluation = "Too Much";
			}
		}

		return evaluation
	};
}



})();