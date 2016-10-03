(function () {
'use strict';

angular.module('ServiceApp',[])
.controller('ServiceAppController',ServiceAppController)
.service('ServiceAppService',ServiceAppService)
.constant('APIRootUrl','http://davids-restaurant.herokuapp.com/')


ServiceAppController.$inject = ['ServiceAppService'];
function ServiceAppController(ServiceAppService) {
	var menu = this;

	var promise = ServiceAppService.getCategories();

	promise.then(function (response) {
		menu.categories = response.data;
	})
	.catch(function (error){
		console.log(error);
	})
};

ServiceAppService.$inject =['$http','APIRootUrl'];
function ServiceAppService($http, APIRootUrl) {
	var service = this;

	service.getCategories = function () {
		var response = $http({
			method: "GET",
			url: "http://davids-restaurant.herokuapp.com/categories.json"
		});

		return response;
	};	
};

})();