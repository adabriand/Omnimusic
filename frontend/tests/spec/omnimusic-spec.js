(function () {
    'use strict';

    describe("Omnimusic Module", function () {
        var $controller;
        var $scope;

        beforeEach(module('omnimusic'));
        
        beforeEach(inject(function(_$rootScope_, _$controller_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
        }));

        it('should have a omnimusicCtrl', function () {
            var controller = $controller('omnimusicCtrl', {$scope: $scope});
            expect(controller).toBeDefined();
        });

        it('should have initiated the model variables', function () {
            $controller('omnimusicCtrl', {$scope: $scope});
            expect($scope.showingPosts).toBe(true);
            expect($scope.showingAbout).toBe(false);
        });

        it('should hide posts on showAbout', function () {
            $controller('omnimusicCtrl', {$scope: $scope});
            $scope.showAbout();
            expect($scope.showingPosts).toBe(false);
            expect($scope.showingAbout).toBe(true);
        });

        it('should hide about on showPosts', function () {
            $controller('omnimusicCtrl', {$scope: $scope});
            $scope.showPosts();
            expect($scope.showingPosts).toBe(true);
            expect($scope.showingAbout).toBe(false);
        });
    });
}());
