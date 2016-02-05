/**
 * Created by john on 9/12/15.
 */

(function () {
'use strict';
angular.module('ganalytics', [
  'ngAnimate',
  'ngMaterial',
  'ngAria',
  'ui.router',
  'ngResource',
  'ganalytics.material',
  'ganalytics.layout'
])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
          function($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
              .state('otherwise', {
                url: '/',
                views: {
                  main_content: {
                    templateUrl: './home/landing.html'
                  }
                }
              });

            $urlRouterProvider.otherwise('/home');
          //  $locationProvider.html5Mode({
          //     enabled: true
          //     // requireBase: false
          //  });
  }]);

})();
