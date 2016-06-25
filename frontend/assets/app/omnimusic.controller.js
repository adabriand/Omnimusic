(function () {
    'use strict';

    angular.module('omnimusic').controller('omnimusicCtrl', function($scope, postsService) {
        $scope.showingPosts = true;
        $scope.showingAbout = false;

        $scope.isSongPlaying = function() {
            return postsService.isSongPlaying;
        };
        $scope.showAbout = function() {
            $scope.showingPosts = false;
            $scope.showingAbout = true;
        };
        $scope.showPosts = function() {
            $scope.showingPosts = true;
            $scope.showingAbout = false;
        };
    });
}());