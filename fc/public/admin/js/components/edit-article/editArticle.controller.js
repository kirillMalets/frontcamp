import angular from 'angular';
import './editArticle.module'

angular.module('editArticle').controller('editArticleController', function editArticleController($scope, $routeParams, editArticleFactory) {
	editArticleFactory.getData($routeParams.articleId).then(function suceess(data) {
		$scope.article = data.data.article;
	});
});