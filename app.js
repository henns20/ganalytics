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
  'my.angular.material',
  'ganalytics.layout'
])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$provide',
          function($stateProvider, $urlRouterProvider, $locationProvider, $provide) {
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
          //

          // another way to try to fix scroll top issue did not work for me
          // http://stackoverflow.com/questions/22290570/angular-ui-router-scroll-to-top-not-to-ui-view
    // $provide.decorator('$uiViewScroll', function ($delegate) {
    //   return function (uiViewElement) {
    //     var top = uiViewElement.getBoundingClientRect().top;
    //     window.scrollTo(0, (top - 30));
    //     // Or some other custom behaviour...
    //   };
    // });

  }])
  // http://stackoverflow.com/questions/26444418/autoscroll-to-top-with-ui-router-and-angularjs
  // scroll top issue(fix)
  .run(function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
   document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  });



})();
