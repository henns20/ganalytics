(function () {
   'use strict';

   angular
    .module('ganalytics')
    .config(stateConfig);

   function stateConfig ($stateProvider) {
      $stateProvider.state('home', {
        url: '/home',
        views: {
          main_content: {
            templateUrl: 'home/home.html',
          }
        }
     });
   }
})();
