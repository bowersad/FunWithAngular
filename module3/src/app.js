(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('NarrowItDownService',NarrowItDownService)
.constant('ApiBaseURL','https://davids-restaurant.herokuapp.com');

NarrowItDownController.$inject = ['NarrowItDownService']
function NarrowItDownController(NarrowItDownService) {
	var narrow = this;

	narrow.FindItems = function () {

	};
};

NarrowItDownService.$inject = ['$http','ApiBaseURL']
function NarrowItDownService($http,ApiBaseURL) {
	var service = this;

	service.GetMenuItems = function () {
		var response = $http({
			method : "GET",
			url : ApiBaseURL + "/menu_items.json"
		});

		return response;
	};


};

})();