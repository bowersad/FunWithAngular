(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('NarrowItDownService',NarrowItDownService)
.factory('RestaurantMenuFactory',RestaurantMenuFactory)
.constant('ApiBaseURL','https://davids-restaurant.herokuapp.com')
.directive('menuitem',MenuItem)
.directive('menuitemdescription',MenuItemDescription);

function MenuItem() {
  var ddo = {
    restrict: "E",
    templateUrl: 'menuItem.html'
  };

  return ddo;
}

function MenuItemDescription() {
  var ddo = {
    template: '{{ item.quantity }} of {{ item.name }}'
  };

  return ddo;
}

NarrowItDownController.$inject = ['RestaurantMenuFactory']
function NarrowItDownController(RestaurantMenuFactory) {
	var narrow = this;
	var restaurantMenu = RestaurantMenuFactory()

	var found = [];

	narrow.FindItems = function () {
		var promise = restaurantMenu.GetMenuItems();
		console.log(narrow.searchTerm);

		promise.then(function (response) {
			narrow.AllMenuItems = response.data;
			console.log(narrow.AllMenuItems);

			var x;
			var item;


			console.log(narrow.AllMenuItems.menu_items[1].description);

			for (x in narrow.AllMenuItems.menu_items) {
				item = narrow.AllMenuItems.menu_items[x];
				//console.log(item.description);
				if (item.description.indexOf(narrow.searchTerm) !== -1) 
				{
					found.push(item);
					//console.log(item.description);
					//console.log(found.length);
				}

			}
			console.log(found.length);
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

function RestaurantMenuFactory() {
  var factory = function () {
    return new NarrowItDownService();
  };

  return factory;
}

})();