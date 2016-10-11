(function () {
'use strict';

angular.module('module2',[])
.controller('module2controller',module2controller)
.service('MenuItemService',MenuItemService)
.constant('MenuItemApiURL','https://davids-restaurant.herokuapp.com')

module2controller.$inject = ['MenuItemService']
function module2controller(MenuItemService) {
	
};

MenuItemService.$inject = ['$http','MenuItemApiURL'];
function MenuItemService ($http, MenuItemApiURL) {
	var service = this;

	service.getMenuItems = function (categoryCode) {
		var response = $http({
			method : "GET",
			URL : MenuItemApiURL + "/menu_items.json",
			params : {
				category : categoryCode
			}
		});
		return response;
	};
};
})();