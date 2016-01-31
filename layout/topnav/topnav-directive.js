(function () {
  'use strict';

  angular
    .module('ganalytics.layout')
    .directive('topnav', directive);

  function directive() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'layout/topnav/topnav.html',
      };

    return directive;
  }
})();
