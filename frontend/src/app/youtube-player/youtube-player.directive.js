(function () {
    'use strict';

    angular.module('omnimusic.youtube-player')
        .directive('youtube', ['$window', '$interval', 'youTubeApiService', function($window, $interval, youTubeApiService) {
        return {
            restrict: "E",
            scope: {
                height: "@",
                width: "@",
                videoid: "@",
                paused: "@",
                volume: "@",
                playProgress: "=",
                seekTo: "=",
                ended: '&'
            },
            template: '<div></div>',
            link: function(scope, element, attrs, $rootScope) {
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                var player;
                youTubeApiService.onReady(function() {
                    player = setupPlayer(scope, element);
                    $interval(watchTimeUpdate, 1000);
                });

                function setupPlayer(scope, element) {
                    return new YT.Player(element.children()[0], {
                        playerVars: {
                            autoplay: 1,
                            html5: 1,
                            theme: "light",
                            modesbranding: 0,
                            color: "white",
                            iv_load_policy: 3,
                            showinfo: 0,
                            controls: 0
                        },
                        height: scope.height,
                        width: scope.width,
                        videoId: scope.videoid,
                        events: {
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
                
                scope.$watch('videoid', function(newValue, oldValue) {
                    if (newValue === oldValue) {
                        return;
                    }
                    player.loadVideoById(scope.videoid);
                });
                
                scope.$watch('paused', function(newValue, oldValue) {
                    if (newValue === oldValue) {
                        return;
                    } else if (newValue === "true") {
                        player.pauseVideo();
                    } else {
                        player.playVideo();
                    }
                });
                
                scope.$watch('volume', function(newValue, oldValue) {
                    if (newValue === oldValue) {
                        return;
                    }
                    player.setVolume(newValue);
                });

                scope.$watch('seekTo', function(newValue, oldValue) {
                    if (newValue === oldValue || newValue === "false") {
                        return;
                    }
                    var seekToValue = (scope.playProgress/100) * player.getDuration();
                    player.seekTo(seekToValue);
                    scope.seekTo = false;
                });

                function watchTimeUpdate() {
                    if (typeof player === "undefined" ||
                        typeof player.getCurrentTime === "undefined") return;
                    var currentTime = player.getCurrentTime();
                    var durationTime = player.getDuration();
                    scope.playProgress = (currentTime/durationTime)*100;
                }

                function onPlayerStateChange(event) {
                    if (event.data === 0) {
                        scope.ended();
                    }
                }
            }
        };
    }]);
}());