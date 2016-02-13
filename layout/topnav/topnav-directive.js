(function () {
  'use strict';

  angular
    .module('ganalytics.layout')
    .directive('topnav', directive);

  function directive() {
    return {
      restrict: 'EA',
      templateUrl: 'layout/topnav/topnav.html',
      };


  }
})();
