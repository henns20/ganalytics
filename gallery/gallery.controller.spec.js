describe("GalleryController", function () {
  var controller,
  PicsService1,
  $httpBackend;

  beforeEach(function () {
    module('ganalytics');
  });

  beforeEach(inject(function (_$controller_, _$httpBackend_, _PicsService1_) {
    $controller = _$controller_;
    $httpBackend = _$httpBackend_;
    PicsService1 = _PicsService1_;
  }));

  beforeEach(function () {
    controller = $controller('GalleryController');
  });

  describe("Gallery controller", function () {
    it("should be created successfully", function () {
      expect(controller).toBeDefined();
    });

    describe("after activate", function () {
      it("description", function () {

      });
    });

  });

});
