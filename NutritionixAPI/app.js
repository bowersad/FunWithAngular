(function (){
'use strict';

angular.module('NutritionixApp',[])
.controller('NutritionixController',NutritionixController)
.service('NutritionixService',NutritionixService)
.constant('NutritionixRootPath','https://api.nutritionix.com/v1_1');

NutritionixController.$inject = ['NutritionixService'];
function NutritionixController(NutritionixService) {
	var app = this;


	var promise = NutritionixService.GetItembyID("513fc9cb673c4fbc2600536a");

	promise.then(function (response) {
		console.log(response.data);
		app.fooditem = response.data;
		console.log(app.fooditem)
	})
	.catch(function (error) {
		console.log(error)
	});

	app.ViewFoodItem = function() {

	}

	app.SearchTerm = "";

	app.SearchAPI = function() {
		console.log(app.SearchTerm);
		var promise = NutritionixService.SearchItems(app.SearchTerm);

	    promise.then(function (response) {
	      console.log(response.data);
	      app.ReturnItems = response.data;
	    })
	    .catch(function (error) {
	      console.log(error);
	    })
	};
};

NutritionixService.$inject = ['$http','NutritionixRootPath']
function NutritionixService($http,NutritionixRootPath) {
	var service = this;



	service.GetItembyID = function(itemId) {
		var response = $http({
			method : "GET",
			url : NutritionixRootPath + "/item",
			params : {
				id : itemId,
				appId : "a7342583",
				appKey : "30aa58fbc7dbc964d1384f9a98bc4b2d"
			}
		});

		return response;
	};

	service.SearchItems = function(searchTerm) {
		var response = $http({
			method : "GET",
			url : NutritionixRootPath + "/search",
			params : {
				id : searchTerm,
				appId : "a7342583",
				appKey : "30aa58fbc7dbc964d1384f9a98bc4b2d"
			}
		});

		return response;
	}
};

})();