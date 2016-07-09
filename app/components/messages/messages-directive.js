'use strict';

angular.module('myApp.messages', [])

.directive('messages', function() {
  return {
    restrict: 'E',
    scope: {
      messageList: '='
    },
    templateUrl: 'components/messages/message-template.html'
  };
  
});