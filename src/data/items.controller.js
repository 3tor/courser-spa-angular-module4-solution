(function () {
'use strict';

angular.module('data')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['MenuDataService', 'items'];
function MenuItemsController(MenuDataService, items) {
	var menuitem = this;
	console.log(items);
	menuitem.itemslist = items;
}

})();