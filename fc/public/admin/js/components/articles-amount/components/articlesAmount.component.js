import angular from 'angular';
import '../articlesAmount.module'

'use strict';

	angular.module('articlesAmount').component('articlesAmount', {
	templateUrl: '/admin/js/components/articles-amount/template/index.html',
	bindings:{},
	constrollerAs: 'articlesAmountVM',
	controller: ['articlesAmountFactory',	function (ArticlesAmountFactory) {
			var vm = this;

			ArticlesAmountFactory.getData().then(function success(data) {
				vm.context = data;
			});
		}
	]
});