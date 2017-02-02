import angular from 'angular';
import '../editArticle.module';
'use strict';

angular.module('editArticle').factory('editArticleFactory', ['$http',	function($http) {

		function getData(id) {
			return $http({
				method: 'GET',
				url: '/api/articles/' + id
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


