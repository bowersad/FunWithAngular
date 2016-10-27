(function () {
'use strict';

angular.module('ShoppingListModule',[])
.controller('ToBuyChildController',ToBuyChildController)
.controller('BoughtChildController',BoughtChildController)
.service('MenuItemService',MenuItemService);



ToBuyChildController.$inject = ['MenuItemService']
function ToBuyChildController(MenuItemService) {
	var buy = this;
	buy.parentvalue = 1;

	buy.shoppingList = MenuItemService.getShoppingList();
	console.log(buy.shoppingList);

	buy.BuyItem = function (Item) {
		MenuItemService.buyItem(Item);		
	};	

	buy.AllBought = function () {
		return MenuItemService.AllBought();
	};

};


ToBuyChildController.$inject = ['MenuItemService']
function BoughtChildController(MenuItemService) {
	var bought = this;

	bought.boughtList = MenuItemService.getItemsBought();
	bought.NoneBought = function () {
		return MenuItemService.NoneBought();
	};
};

MenuItemService.$inject = ['$http'];
function MenuItemService ($http) {
	var service = this;

	service.itemsToBuy =[{"id": 1, "name" : "eggs", "quantity" : 12},
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
						{"id": 12, "name" : "lime juice", "quantity" : 2}];

	service.itemsBought = [];

	service.getShoppingList = function () {
		return service.itemsToBuy;
	};

	service.getItemsBought = function () {
		return service.itemsBought;
	}


	service.buyItem = function (Item) {
		var i;
		console.log(Item);		
		for (i = 0; i < service.itemsToBuy.length; i++)
		{
			if (service.itemsToBuy[i].name == Item) {
				service.itemsBought.push(service.itemsToBuy[i]);
				service.itemsToBuy.splice(i,1);

				console.log(service.itemsBought);
			}
		}
	};

	service.AllBought = function () {
		if (service.itemsToBuy.length == 0)
		{
			return true;
		}
		return false;
	};

	service.NoneBought = function () {
		if (service.itemsBought.length == 0)
		{
			return true;
		}
		return false;
	};


};
})(); 