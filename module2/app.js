(function () {
'use strict';

angular.module('module2',[])
.controller('module2controller',module2controller)
.service('MenuItemService',MenuItemService)
.constant('MenuItemApiURL','https://davids-restaurant.herokuapp.com')

module2controller.$inject = ['MenuItemService']
function module2controller(MenuItemService) {
	var menu = this;

	var promise = MenuItemService.getCategories();

	promise.then(function (response) {
		menu.categories = response.data;
	})
	.catch(function (error) {
		console.log(error);
	});

	menu.getItemsByCategory = function(categoryCode) {
		var promise = MenuItemService.getMenuItems(categoryCode);
		console.log('Yup');

		promise.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
	};
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
};
})();