(function () {
'use strict';

angular.module('data')
.controller('MenuCategoriesController', MenuCategoriesController);

MenuCategoriesController.$inject = ['MenuDataService', 'categoryitems'];
function MenuCategoriesController(MenuDataService, categoryitems) {
	var menucat = this;
	console.log(categoryitems);
	menucat.categoryitems = categoryitems;
	console.log(menucat.categoryitems);
}
})();