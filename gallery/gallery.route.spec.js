describe("gallery routes", function () {
  describe("state", function () {
    var view = 'gallery/gallery.html',
      $rootScope,
      $state,
      $templateCache;

    beforeEach(module("ganalytics"));

    beforeEach(inject(function(_$state_, _$templateCache_, _$rootScope_) {
        $state = _$state_;
        $templateCache = _$templateCache_;
        $rootScope = _$rootScope_;
      }));

    beforeEach(function () {
        $templateCache.put(view, '');
    });


    it('should map state dashboard to url / ', function() {
        expect($state.href('gallery', {})).toEqual('#/gallery');
    });

    it('should map /gallery route to gallery View template ', function() {
        expect($state.get('gallery').views.main_content.templateUrl).toEqual(view);
    });

    it('of gallery should work with $state.go', function () {
        $state.go('gallery');
        $rootScope.$apply();
        dump(angular.mock.dump($state.current.name));
        expect($state.is('gallery')).toBe(true);
    });

  });
});
