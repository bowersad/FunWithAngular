(function (){
'use strict';

angular.module('NutritionixApp',[])
.controller('NutritionixController',NutritionixController)
.service('NutritionixService',NutritionixService)
.constant('NutritionixRootPath','https://api.nutritionix.com/v1_1/search/');

function NutritionixController() {

};

})();