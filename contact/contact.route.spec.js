describe("Contact route", function () {
  describe("state", function () {
    var view = 'contact/contact.html',
      $state,
      $templateCache,
      $rootScope;

    beforeEach(module("ganalytics"));

    beforeEach(inject(function(_$state_, _$templateCache_, _$rootScope_) {
      $state = _$state_;
      $templateCache =  _$templateCache_;
      $rootScope =  _$rootScope_;
    }));

    beforeEach(function () {
      $templateCache.put(view, '');
    });

    it("should map state contact #/contact", function () {
        expect($state.href('contact')).toEqual('#/contact');
    });
  });
});
