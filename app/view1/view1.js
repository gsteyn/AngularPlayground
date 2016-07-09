'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
    
    var testString = 'foo';
    var testModel = { bla: true };
    
    var $ctrl = this;
    
    $ctrl.messages = [
        {
            message: 'message 1',
            type: 'info',
            length: 6,
            displayCond: testString != null || testString != ''
        },
        {
            message: 'message 2',
            type: 'error',
            displayCond: testModel && testModel.bla
        }
    ];
    
    $scope.toggle = function(message) {
        $ctrl.messages[message].displayCond = !$ctrl.messages[message].displayCond;
//        if (message === 0) {
//            testString = !testString;
//        } else if (message === 1) {
//            testModel.bla = !testModel.bla;
//        }
    };
    
}]);