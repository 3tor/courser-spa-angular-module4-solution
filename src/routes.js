(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'src/menulist/templates/home.template.html'
	})
	.state('categories', {
		url: '/categories',
		templateUrl: 'src/menulist/templates/categories.template.html',
		controller: 'MenuCategoriesController as categoriesCtrl',
		resolve: {
			categoryitems: ['MenuDataService', function (MenuDataService) {
				return MenuDataService.getAllCategories();
			}]
		}
	})
	.state('categories.items', {
		url: '/items/{categoryShortName}',
		templateUrl: 'src/menulist/templates/items.template.html',
		controller: 'MenuItemsController as menuitemCtrl',
		resolve: {
			items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
				return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
			}]
		}
	})
}

})();