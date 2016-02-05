/**
 * Created by john on 11/3/15.
 */

angular.module('ganalytics')
  .controller('GalleryController', GalleryController);

function GalleryController(PicsService1) { /* $mdSidenav, was a service injected */
  var vm = this;
  vm.testingbinding = 'yes binding is working';
  vm.myFilter = {category: "silicon valley"};
  vm.picsList = PicsService1.query();
}
