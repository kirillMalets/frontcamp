import angular from 'angular';
import '../addArticle.module';
'use strict';

angular.module('addArticle').factory('addArticleFactory', ['$http',	function($http) {

	function addData(data) {
		return $http({
			method: 'POST',
			url: '/api/articles',
			data: data
		}).then(function successCallback(response) {
			return response;
		}, function errorCallback(response) {
			console.log(response);
		});
	}

	return {
		addData: addData
	};
}
]);


