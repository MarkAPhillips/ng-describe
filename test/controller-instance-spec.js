angular.module('C1', [])
  .directive('cDirective', function () {
    return {
      controllerAs: 'ctrl',
      controller: function ($scope) {
        $scope.foo = 'foo';
        this.foo = function getFoo() {
          return $scope.foo;
        };
      }
    };
  });

/* global ngDescribe, it */
ngDescribe({
  name: 'controller for directive instance',
  modules: 'C1',
  element: '<c-directive></c-directive>',
  only: false,
  tests: function (deps) {
    it('has element', function () {
      la(check.object(deps.element));
    });

    it('has scope', function () {
      var scope = deps.element.scope();
      la(scope.foo === 'foo');
    });

    it('has controller', function () {
      var scope = deps.element.scope();
      var controller = scope.ctrl;
      la(typeof controller.foo === 'function');
      la(controller.foo() === 'foo');
      scope.foo = 'bar';
      la(controller.foo() === 'bar');
    });
  }
});
