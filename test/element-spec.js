angular.module('MyFoo', [])
  .directive('myFoo', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<span>{{ bar }}</span>'
    };
  });
/* global ngDescribe, it */
ngDescribe({
  name: 'MyFoo directive',
  modules: 'MyFoo',
  element: '<my-foo></my-foo>',
  tests: function (deps) {
    it('creates myFoo element', function () {
      la(check.object(deps), 'has dependencies');
      la(check.has(deps, 'element'), 'has compiled element');
    });

    it('compiled template', function () {
      la(deps.element.html() === '');
    });

    it('has scope', function () {
      var scope = deps.element.scope();
      la(check.object(scope));
    });

    it('can update DOM using binding', function () {
      var scope = deps.element.scope();
      scope.bar = 'bar';
      scope.$apply();
      la(deps.element.html() === 'bar');
    });
  }
});
