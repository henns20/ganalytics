(function () {
  'use strict';

  angular
    .module('ganalytics')
    .factory('picsSimple', picsSimple);

  function picsSimple($http, $q) {
    return {
      getAll: getAll
    };

    function getAll() {
      return httpPromise('./assets/mock-data/pics-data-mock-hc/picsoptions.json');
    }

    function httpPromise(url) {
      var deferred = $q.defer();
      $http.get(url)
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function () {
          deferred.reject();
        });
      return deferred.promise; 
    }

  }
})();
