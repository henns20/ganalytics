(function () {
   'use strict';

   angular
    .module('ganalytics')
    .config(stateConfig);

   function stateConfig ($stateProvider) {
      $stateProvider.state('groups', {
        url: '/groups',
        views: {
          main_content: {
            templateUrl: 'groups/groups.html'
          }
        }
      });
   }
})();
