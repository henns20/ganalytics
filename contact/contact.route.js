(function () {
   'use strict';

   angular
    .module('ganalytics')
    .config(stateConfig);

   function stateConfig ($stateProvider) {
      $stateProvider.state('contact', {
        url: '/contact',
        views: {
          main_content: {
            templateUrl: 'contact/contact.html',
          }
        }
     });
   }
})();
