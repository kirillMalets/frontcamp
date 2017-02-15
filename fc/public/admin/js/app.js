import angular from 'angular';
import 'angular-route';
import './components/articles-amount/articlesAmount.module'
import './components/articles-amount/components/articlesAmount.component'
import  './components/articles-amount/services/articlesAmount.factory'
import  './components/add-article/addArticle.module'
import  './components/add-article/components/addArticle.component'
import  './components/add-article/services/addArticle.factory'
import './components/edit-article/editArticle.module'
import './components/edit-article/editArticle.controller'
import './components/edit-article/services/editArticle.factory'

angular.module('articleApp', ['ngRoute', 'articlesAmount', 'addArticle', 'editArticle']
).controller('mainCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	console.log($routeParams)
}]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/admin/add', {
			templateUrl: 'admin/js/components/add-article/add-article.html'
		})
		.when('/admin/article/:articleId/edit', {
			templateUrl: 'admin/js/components/edit-article/edit-article.html',
			controller: 'editArticleController'
		}).
		otherwise({
			controller: 'mainCtrl',
			templateUrl: 'admin/js/components/articles-amount/main.html'
		});
	$locationProvider.html5Mode(true);
}]);