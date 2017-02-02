import angular from 'angular';
import '../articlesAmount.module';
'use strict';

angular.module('articlesAmount').factory('articlesAmountFactory', ['$http',	function($http) {

		function getData() {
			return $http({
				method: 'GET',
				url: '/api/articles'
			}).then(function successCallback(response) {
				return response;
			}, function errorCallback(response) {
				console.log(response);
			});
		}

		return {
			getData: getData
		};
	}
]);


