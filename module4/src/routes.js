(function (){
'use strict';

angular.module("ResturantMenu",[])
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
function RoutesConfig()
{
	$urlRouterProvider.others('/');

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: '/templates/home.template.html'
	})

	.state('categoryList', {
		url: '/categories',
		templateUrl: '/templates/category.template.html'
	})
};

})();