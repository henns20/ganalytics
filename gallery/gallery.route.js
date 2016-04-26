(function () {
   'use strict';

   angular
    .module('ganalytics')
    .config(stateConfig);

   function stateConfig ($stateProvider) {
      $stateProvider
        .state('gallery', {
        url: '/gallery',
        views: {
          main_content: {
            templateUrl: 'gallery/gallery.html'
          }
        }
      })
      .state('gallery.all', {
        url: '/all',
        views: {
          main_content: {
            templateUrl: 'gallery/gallery.html'
          }
        }
      })
      .state('gallery.silicon-valley', {
        url: '/silicon-valley',
        views: {
          main_content: {
            templateUrl: 'gallery/gallery.html'
          }
        }
      })
      .state('gallery.cheeky', {
         url: '/cheeky',
         views: {
           main_content: {
             templateUrl: 'gallery/gallery.html'
           }
         }
       });

   }
})();
