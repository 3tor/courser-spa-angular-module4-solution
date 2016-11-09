(function () {
'use strict';

angular.module('data')
.component('items', {
	templateUrl: 'src/menulist/templates/menuapp-items.template.html',
	bindings: {
		itemslist: '<'
	}
})

})();