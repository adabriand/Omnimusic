(function () {
    'use strict';

    angular.module('omnimusic.posts').controller('postsCtrl', function($scope, postsService) {
        $scope.currentPlaying = undefined;
        $scope.pausedPlayer = true;
        $scope.postsCollapsed = false;
        $scope.volumeHeight = 100;
        $scope.playProgress = 0;
        $scope.seekTo = false;
        $scope.postsData = [{ artworkFileName : 'karol-conka.jpg', artist : "Karol Conka",
            title: "Tombei (ft. Tropkillaz)", album: "Tombei (Single)", year : "2014", youtubeId : 'SdYXMyJEKZs'},
            { artworkFileName : 'andrew-bird.jpg', artist : "Andrew Bird",
                title: "Left Handed Kisses (ft. Fiona Apple)", album: "Are You Serious", year : "2016", youtubeId : 'RZwtWExDmoI'},
            { artworkFileName : 'st-vincent.jpg', artist : "St. Vincent",
                title: "Birth In Reverse", album: "St. Vincent", year : "2014", youtubeId : '0c5BhXdVBqw'},
            { artworkFileName : 'jungle.jpg', artist : "Jungle",
                title: "The Heat", album: "Jungle", year : "2014", youtubeId : 'Y4UckOGdZtI'}];

        function postsIndexOf(post) {
            if (typeof post == "undefined") {
                return -1;
            }
            var arr = $scope.postsData;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].youtubeId === post.youtubeId) {
                    return i;
                }
            }
            return -1;
        }

        function postExists(post) {
            return postsIndexOf(post) != -1;
        }

        function setCurrentPlaying(post) {
            $scope.currentPlaying = post;
            $scope.currentPlayingYoutubeId = post.youtubeId;
            setPausedPlayer(false);
        }

        function setPausedPlayer(bool) {
            $scope.pausedPlayer = bool;
            postsService.isSongPlaying = !bool;
        }

        $scope.setPostsData = function(postsData) {
            $scope.postsData = postsData;
        };
        
        $scope.playPost = function(post) {
            if (!postExists(post)) {
                return;
            }
            if ($scope.isThisPostPlaying(post)) {
                setPausedPlayer(true);
                return;
            }
            setCurrentPlaying(post);
        };
        
        $scope.isThisPostPlaying = function(post) {
            return $scope.currentPlaying === post && !$scope.pausedPlayer;
        };

        $scope.playCurrentPlayingPost = function() {
            $scope.playPost($scope.currentPlaying);
        };

        $scope.playEnded = function() {
            if (typeof $scope.currentPlaying === "undefined") {
                return;
            }
            var currentPostIndex = postsIndexOf($scope.currentPlaying);
            if (currentPostIndex === -1) {
                return;
            }
            currentPostIndex = currentPostIndex + 1 === $scope.postsData.length ?
                    0 : currentPostIndex + 1;
            $scope.playPost($scope.postsData[currentPostIndex]);
        };

        $scope.updateVolumeHeight = function (event) {
            var clickPosY = event.clientY - $(event.currentTarget).offset().top;
            var volumeBarHeight = $(event.currentTarget).height();
            clickPosY = volumeBarHeight - clickPosY < 0 ? 0 : volumeBarHeight - clickPosY;
            $scope.volumeHeight = (clickPosY / volumeBarHeight) * 100;
        };

        $scope.updatePlayProgress = function (event) {
            var clickPosX = event.clientX - $(event.currentTarget).offset().left;
            var progressBarWidth = $(event.currentTarget).width();
            clickPosX = clickPosX < 0 ? 0 : clickPosX;
            $scope.playProgress = (clickPosX / progressBarWidth) * 100;
            $scope.seekTo = true;
        };
    });
}());