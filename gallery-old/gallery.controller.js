/**
 * Created by john on 11/3/15.
 */

angular.module('ganalytics')
  .controller('GalleryController', GalleryController);

function GalleryController(pictureService) { /* $mdSidenav, was a service injected */
  var vm = this;
  

  vm.myFilter = {category: "silicon valley"};
  vm.picsList  = pictureService.query({picsId: 'picsoptions'});
  //  pictureService.query().
  //   then(function(data) {
  //     vm.picsList = data;
  //   });
  console.log(vm.picsList);
}
