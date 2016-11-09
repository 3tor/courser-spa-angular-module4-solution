(function () {
'use strict';

angular.module('data')
.component('categories', {
	templateUrl: 'src/menulist/templates/menuapp-categories.template.html',
	bindings: {
		categoryitems: '<'
	},
	// controller: CategoriesComponentController
})

})();