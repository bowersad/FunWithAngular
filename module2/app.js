(function () {
'use strict';

angular.module('module2',[])
.controller('ShoppingListController',ShoppingListController)
.controller('BuyChildController',BuyChildController)
.controller('BoughtChildController',BoughtChildController)
.service('MenuItemService',MenuItemService);



ShoppingListController.$inject = ['MenuItemService']
function ShoppingListController(MenuItemService) {
	var menu = this;
	menu.parentvalue = 1;

	menu.shoppingList = MenuItemService.getShoppingList();
	console.log(menu.shoppingList.shopping_items);

	menu.BuyItem = function (ItemID) {
		var index = array.indexOf(ItemID);
		console.log(index);
	};	

};

function BuyChildController($scope) {
	var buy = this;

};


function BoughtChildController($scope) {
	var bought = this;

	bought.value = 5;
	console.log("BoughtChildController $scope: ", $scope);
};

MenuItemService.$inject = ['$http'];
function MenuItemService ($http) {
	var service = this;

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