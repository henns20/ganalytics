(function () {
   'use strict';

   angular
    .module('ganalytics')
    .config(stateConfig);

   function stateConfig ($stateProvider) {
      $stateProvider.state('custom-services', {
        url: '/custom-services',
        views: {
          main_content: {
            templateUrl: 'custom/custom-services.html',
          }
        }
      });
   }
})();
