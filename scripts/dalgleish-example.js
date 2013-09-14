angular.element(document).ready(function() {
  var PromiseExample = window.PromiseExample = angular.module('PromiseExample', []);

  PromiseExample.factory('promise', function ($q, $timeout) {
    var getMessages = function () {
      var d = $q.defer();

      $timeout(function () {
        d.resolve(['Hello', 'world!']);
      }, 2000);

      return d.promise;
    };

    return {
      getMessages: getMessages
    };

  });

  PromiseExample.controller('MainCtrl', function ($scope, promise) {
//    promise.getMessages().then(function (messages) {
//      $scope.messages = messages;
//    });

    // Option 2:
    $scope.messages = promise.getMessages();

  });

  angular.bootstrap(document, ['PromiseExample']);
});