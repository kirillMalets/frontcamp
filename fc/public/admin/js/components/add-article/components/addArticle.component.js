import angular from 'angular';
import '../addArticle.module'

'use strict';

angular.module('addArticle').component('addArticle', {
	templateUrl: '/admin/js/components/add-article/template/index.html',
	controllerAs: 'addArticleVM',
	bindings: {
		context: '<'
	},
	controller: ['addArticleFactory',	function addArticleCtrl(addArticleFactory) {
		var vm = this;
		//vm.article = vm.context || {};

		vm.submit = function() {
			addArticleFactory.addData(vm.context).then(function success(data) {
				if (data) {
					vm.isSuccess  = true;
				}
			})
		}
	}
	]
});