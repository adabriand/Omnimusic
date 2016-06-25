(function () {
    'use strict';

    angular.module('omnimusic.posts').service("postsService", function() {
        return {
            isSongPlaying : false
        };
    });
}());