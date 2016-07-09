'use strict';

describe('myApp.view1 module', function () {

    beforeEach(module('myApp.view1'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('view1 controller', function () {

        it('should ....', function () {
            var $scope = {};
            var controller = $controller('View1Ctrl', {$scope: $scope});
            
            expect(controller).toBeDefined();
        });
        
        it('toggles message 1', function () {
            var index = 0;
            var $scope = {};
            var controller = $controller('View1Ctrl', {$scope: $scope});
            
            expect(controller.messages[index].displayCond).toBe(true);
            $scope.toggle(index);
            expect(controller.messages[index].displayCond).toBe(false);
        });
        
        it('toggles message 2', function () {
            var index = 1;
            var $scope = {};
            var controller = $controller('View1Ctrl', {$scope: $scope});
            
            expect(controller.messages[index].displayCond).toBe(true);
            $scope.toggle(index);
            expect(controller.messages[index].displayCond).toBe(false);
        });

    });
});