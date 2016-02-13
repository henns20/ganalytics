/**
 * Created by john on 8/18/15.
 */
angular.module('ganalytics')
  .controller('PicsDetailCtrl',  function($scope, $stateParams, pictureService) {
    pictureService.get({picsId: $stateParams.picsId}, function(pic) {
      $scope.name = pic.name;
      $scope.imageUrl = pic.imageUrl;

    });
});
