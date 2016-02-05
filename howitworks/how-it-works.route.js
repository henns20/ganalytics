(function () {
   'use strict';

   angular
    .module('ganalytics')
    .config(stateConfig);

   function stateConfig ($stateProvider) {
      $stateProvider.state('how-it-works', {
        url: '/how-it-works',
        views: {
          main_content: {
            templateUrl: 'howitworks/how-it-works.html'
          }
        }
      });
   }
})();
