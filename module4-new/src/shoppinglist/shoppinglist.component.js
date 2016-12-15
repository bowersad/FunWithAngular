(function () {
'use strict';

angular.module('RestaurantMenu')
.component('shoppingList', {
  templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
