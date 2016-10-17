(function () {
'use strict';

angular.module('module2',[])
.controller('module2controller',module2controller)
.service('MenuItemService',MenuItemService)
.constant('MenuItemApiURL','https://davids-restaurant.herokuapp.com')

module2controller.$inject = ['MenuItemService']
function module2controller(MenuItemService) {
	var menu = this;

	menu.shoppingList = MenuItemService.getShoppingList();
	console.log(menu.shoppingList.shopping_items);

};

MenuItemService.$inject = ['$http','MenuItemApiURL'];
function MenuItemService ($http, MenuItemApiURL) {
	var service = this;

	service.getCategories = function () {
		var response = $http({
			method : "GET",
			url : MenuItemApiURL + "/categories.json"
		});
		return response;
	};
	service.getMenuItems = function (categoryCode) {
		var response = $http({
			method : "GET",
			url : MenuItemApiURL + "/menu_items.json",
			params : {
				category : categoryCode
			}
		});
		return response;
	};

	service.getShoppingList = function () {
		return {"shopping_items":[{"id": 1, "name" : "eggs", "quantity" : 12},
								{"id": 2, "name" : "cheese", "quantity" : 3},
								{"id": 3, "name" : "black beans", "quantity" : 1},
								{"id": 4, "name" : "pinto bean", "quantity" : 2},
								{"id": 5, "name" : "onions", "quantity" : 2},
								{"id": 6, "name" : "peppers", "quantity" : 1},
								{"id": 7, "name" : "avocado", "quantity" : 3},
								{"id": 8, "name" : "tomatoes", "quantity" : 6},
								{"id": 9, "name" : "tortillas", "quantity" : 6},
								{"id": 10, "name" : "spice", "quantity" : 10},
								{"id": 11, "name" : "oil", "quantity" : 1},
								{"id": 12, "name" : "lime juice", "quantity" : 2}]}
	};
};
})();