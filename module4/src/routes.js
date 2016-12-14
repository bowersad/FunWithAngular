(function (){
'use strict';

angular.module('RestaurantMenu')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
function RoutesConfig($stateProvider,$urlRouterProvider)
{
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'src/templates/home.template.html'
	}).state('categoryList', {
		url: '/categories',
		templateUrl: 'src/templates/category.template.html'
	});
};

})();