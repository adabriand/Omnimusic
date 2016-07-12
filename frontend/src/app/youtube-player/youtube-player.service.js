(function () {
    'use strict';

    angular.module('omnimusic.youtube-player').service("youTubeApiService", ['$q', '$window', function($q, $window) {
        var deferred = $q.defer();
        var apiReady = deferred.promise;

        $window.onYouTubeIframeAPIReady = function() {
            deferred.resolve();
        };

        return {
            onReady: function(callback) {
                apiReady.then(callback);
            }
        };
    }]);
}());