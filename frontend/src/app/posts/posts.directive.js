(function () {
    'use strict';

    angular.module('omnimusic.posts').directive('posts', function() {
        return {
            restrict : 'E',
            templateUrl : 'app/posts/posts.html',
            link: function(scope, element, attrs , ctrl) {
                var watch = scope.$watch(function() {
                    return element.children().length;
                }, function() {
                    scope.$evalAsync(function() {
                        var isTouchDevice = 'ontouchstart' in document.documentElement;
                        $(element).find('.posts-container').smoothDivScroll( {
                            mousewheelScrolling: 'allDirections',
                            visibleHotSpotBackgrounds: '',
                            touchScrolling: isTouchDevice
                        });
                        watch();
                    });
                });
            }
        };
    });
}());