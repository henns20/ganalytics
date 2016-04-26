(function () {
   'use strict';

   angular
    .module('ganalytics')
    .config(stateConfig);

   function stateConfig ($stateProvider) {
      $stateProvider
        .state('gallery-snapshot', {
        url: '/gallery-snapshot',
        views: {
          main_content: {
            templateUrl: 'gallery-snapshot/gallery-snapshot.html'
          }
        }
      });

   }
})();
