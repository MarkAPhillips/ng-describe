/* global ngDescribe, it */
ngDescribe({
  inject: ['$q', '$rootScope'],
  tests: function (deps) {
    it('injects $q', function () {
      la(typeof deps.$q === 'function');
    });

    it('can be resolved', function () {
      deps.$q.when(42).then(function (value) {
        la(value === 42);
      });
      // move promises along
      deps.$rootScope.$digest();
    });
  }
});
