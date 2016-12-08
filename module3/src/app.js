(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('NarrowItDownService',NarrowItDownService)
.constant('ApiBaseURL','https://davids-restaurant.herokuapp.com');

NarrowItDownController.$inject = ['NarrowItDownService']
function NarrowItDownController(NarrowItDownService) {
	var narrow = this;



	narrow.FindItems = function (searchTerm) {
		var promise = NarrowItDownService.GetMenuItems();

		promise.then(function (response) {
			narrow.AllMenuItems = response.data;
			console.log(narrow.AllMenuItems);
			console.log(searchTerm);
			var x;
			var item;

			console.log(narrow.AllMenuItems.menu_items[1].description);

			for (x in narrow.AllMenuItems.menu_items) {
				item = narrow.AllMenuItems.menu_items[x];
				console.log(item.description);
				//console.log(narrow.AllMenuItems[x].description.indexOf(searchTerm) !== -1);

			}

		})
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