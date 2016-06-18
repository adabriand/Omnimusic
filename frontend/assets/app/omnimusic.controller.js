(function () {
    'use strict';

    angular.module('omnimusic').controller('omnimusicCtrl', function($scope, postsService) {
        $scope.hidePosts = false;
        $scope.hideAbout = true;

        $scope.isSongPlaying = function() {
            return postsService.isSongPlaying;
        }
        $scope.showAbout = function() {
            $scope.hidePosts = true;
            $scope.hideAbout = false;
        }
        $scope.showPosts = function() {
            $scope.hidePosts = false;
            $scope.hideAbout = true;
        }
    });
}());