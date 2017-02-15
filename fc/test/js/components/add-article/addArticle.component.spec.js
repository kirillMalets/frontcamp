import angular from 'angular';
import 'angular-mocks'
import '../../../../public/admin/js/components/add-article/components/addArticle.component';
/*import '../../../../public/admin/js/components/add-article/template/index.html';*/

	describe('addArticleComponent', function() {
		var $compile, $rootScope, scope, formScope, element;

		beforeEach(angular.mock.module(
			'addArticle',
			function provideFn($provide) {
			}
		));

		beforeEach(inject(function(_$compile_, _$rootScope_) {
			$compile = _$compile_;
			$rootScope = _$rootScope_;

			scope = $rootScope.$new();

			scope.context = {
				title: '111',
				content: 'hfiqwofwj'
			};
			compileDirective('<add-article context="context"></add-article>');
		}));

		function compileDirective(pTpl) {
			var tpl = angular.element(pTpl);

			element = $compile(tpl)(scope);
			$rootScope.$apply();
			formScope = element.isolateScope();
		}


		it('should compile component', function() {
			console.log(element);

			expect(element.find('button')).toBeTruthy();
		});

	});

