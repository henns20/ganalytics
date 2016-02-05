(function () {
   'use strict';

   angular
    .module('ganalytics')
    .config(stateConfig);

   function stateConfig ($stateProvider) {
      $stateProvider.state('gallery', {
        url: '/gallery',
        views: {
          main_content: {
            templateUrl: 'gallery/gallery.html'
          }
        }
      });
   }
})();
