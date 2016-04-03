(function () {
    'use strict';

    angular.module('omnimusic').controller('omnimusicCtrl', function($scope, postsService) {
        $scope.isSongPlaying = function() {
            return postsService.isSongPlaying;
        }
    });
}());