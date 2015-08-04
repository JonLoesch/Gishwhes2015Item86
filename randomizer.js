// alert('asdf');
var app = angular.module('GISHWHES', []);
app.controller('randomizer', function($scope) {
    $scope.images = {
        head: {
            currentIndex: 0,
            possible: [
                {
                    src: '/Gishwhes 2015/Item 86/head_0.png',
                    aspect: 545/793,
                    name: {first: 'rat', last: 'rat'},
                    neck: {x: -.02, y: 1, width: .60},
                },
                {
                    src: '/Gishwhes 2015/Item 86/head_2.png',
                    aspect: 94/122,
                    name: {first: 'wolf', last: 'wolf'},
                    neck: {x: .25, y: 1, width: .45},
                },
            ],
            x: function() {
                return $scope.images.body.x() + $scope.current('body').neck.x * $scope.images.body.width() - $scope.images.head.width() * $scope.current('head').neck.x;
            },
            width: function() {
                return $scope.current("body").width * $scope.current("body").neck.width / $scope.current("head").neck.width;
            },
            height: function() {
                return $scope.current("head").aspect * $scope.images.head.width();
            },
            y: function() {
                return $scope.images.body.y() + $scope.current('body').neck.y * $scope.images.body.height() - $scope.images.head.height() * $scope.current('head').neck.y;
            },
        },
        body: {
            currentIndex: 0,
            possible: [
                {
                    src: '/Gishwhes 2015/Item 86/body_0.png',
                    aspect: 753/1625,
                    width: 300,
                    base: 50,
                    name: {first: 'fog', last: 'fog'},
                    neck: {x: .50, y: 0, width: .30},
                },
                {
                    src: '/Gishwhes 2015/Item 86/body_2.png',
                    aspect: 297/298,
                    width: 300,
                    base: 50,
                    name: {first: 'cock', last: 'cock'},
                    neck: {x: .69, y: .39, width: .19},
                },
            ],
            x: function() {
                return 250 - ($scope.current('body').width / 2);
            },
            y: function() {
                return 500 - $scope.current('body').base - $scope.images.body.height();
            },
            height: function () {
                return $scope.current('body').aspect * $scope.current('body').width;
            },
            width: function() {
                return $scope.current('body').width;
            },
        },
    };

    $scope.current = function(seg) {
        return $scope.images[seg].possible[$scope.images[seg].currentIndex];
    };

    $scope.backward = function(seg) {
        $scope.images[seg].currentIndex--;
        if ($scope.images[seg].currentIndex < 0) {
            $scope.images[seg].currentIndex += $scope.images[seg].possible.length;
        }
    };

    $scope.forward = function(seg) {
        $scope.images[seg].currentIndex++;
        if ($scope.images[seg].currentIndex >= $scope.images[seg].possible.length) {
            $scope.images[seg].currentIndex -= $scope.images[seg].possible.length;
        }
    };

    $scope.shuffle = function() {
        for(var i in $scope.images) {
            $scope.images[i].currentIndex = Math.floor(Math.random() * $scope.images[i].possible.length);
        }
    };
});
