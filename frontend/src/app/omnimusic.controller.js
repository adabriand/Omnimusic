(function () {
    'use strict';

    angular.module('omnimusic').controller('omnimusicCtrl', ['$scope', 'postsService', function($scope, postsService) {
        $scope.showingPosts = true;
        $scope.showingAbout = false;

        $scope.isSongPlaying = function() {
            return postsService.isSongPlaying;
        };
        $scope.toggleAbout = function() {
            if ($scope.showingAbout) {
                $scope.showPosts();
                return;
            }
            $scope.showAbout();
        };
        $scope.showAbout = function() {
            $scope.showingPosts = false;
            $scope.showingAbout = true;
        };
        $scope.showPosts = function() {
            $scope.showingPosts = true;
            $scope.showingAbout = false;
        };
    }]);
}());