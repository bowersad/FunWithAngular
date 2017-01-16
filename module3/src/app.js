(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('ItemLookUpService',ItemLookUpService)
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

NarrowItDownController.$inject = ['RestaurantMenuFactory','NarrowItDownService']
function NarrowItDownController(RestaurantMenuFactory,NarrowItDownService) {
	var narrow = this;
	var restaurantMenu = RestaurantMenuFactory()

	var found = [];

	narrow.FindItems = function () {
		var promise = restaurantMenu.GetMenuItems();
		console.log(narrow.searchTerm);

		promise.then(function (response) {
			narrow.AllMenuItems = response.data;
			console.log(narrow.AllMenuItems);
			console.log(narrow.AllMenuItems.menu_items[1].description);

			var x;
			var item;

			for (x in narrow.AllMenuItems.menu_items) {
				var nextpromise = NarrowItDownService.checkName(narrow.AllMenuItems.menu_items[1].description,narrow.searchTerm);
				//item = narrow.AllMenuItems.menu_items[x];
				//console.log(item.description);
				nextpromise.then(function (response) {
					found.push(narrow.AllMenuItems.menu_items[1].description);					
				})

				// if (item.description.indexOf(narrow.searchTerm) !== -1) 
				// {
				// 	found.push(item);
				// 	//console.log(item.description);
				// 	//console.log(found.length);
				// }

			}
			console.log(found.length);
		})
		console.log(found);
	};
};

NarrowItDownService.$inject = ['$q','$timeout']
function NarrowItDownService($q, $timeout) {
	var service = this;

	service.checkName = function (name,searchTerm) {
    var deferred = $q.defer();

    var result = {
      message: ""
    };

    $timeout(function () {
      // Check for cookies
      if (name.toLowerCase().indexOf(searchTerm) === -1) {
        deferred.resolve(result)
      }
      else {
        result.message = "Not Found";
        deferred.reject(result);
      }
    });

    return deferred.promise;
  };
}

function ItemLookUpService($http,ApiBaseURL) {
	var service = this;

	service.GetMenuItems = function () {
		var response = $http({
			method : "GET",
			url : ApiBaseURL + "/menu_items.json"
		});

		return response;
	};
};

RestaurantMenuFactory.$inject = ['$http','ApiBaseURL']
function RestaurantMenuFactory($http,ApiBaseURL) {
  var factory = function () {
    return new ItemLookUpService($http,ApiBaseURL);
  };

  return factory;
}

})();