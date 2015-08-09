var app = angular.module('GISHWHES', []);
app.controller('randomizer', function($scope) {
    $scope.components = {
        hat: new Set([
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/hat1.small.png',
                aspect: 625/1000,
                base: new Anchor(new Victor(-0.25, .1896), new Victor(0.496, -0.1008)),
                docks: {},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/hat2.small.png',
                aspect: 1000/1000,
                base: Anchor.fromString('-0.354 0.205   0.725   -0.052'),
                docks: {},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/hat3.small.png',
                aspect: 573/1000,
                base: Anchor.fromString('-0.247 0.260907504 0.497   0'),
                docks: {},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/hat4.small.png',
                aspect: 778/1000,
                base: Anchor.fromString('-0.297 0.205655527 0.588   0.00,570694'),
                docks: {},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/hat5.small.png',
                aspect: 591/1000,
                base: Anchor.fromString('-0.469 0.371404399 0.682   -0.421319797'),
                docks: {},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/hat6.small.png',
                aspect: 912/1000,
                base: Anchor.fromString('-0.28  0.292763158 0.508   -0.027412281'),
                docks: {},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/hat7.small.png',
                aspect: 673/1000,
                base: Anchor.fromString('-0.33  0.46731055  0.67    -0.004457652'),
                docks: {},
            }),
            // giranimals/hat2.png:  PNG image data, 1000 x 1000, 8-bit/color RGBA, non-interlaced
            // giranimals/hat3.png:  PNG image data, 1000 x 573, 8-bit/color RGBA, non-interlaced
            // giranimals/hat5.png:  PNG image data, 1000 x 591, 8-bit/color RGBA, non-interlaced
            // giranimals/hat6.png:  PNG image data, 1000 x 912, 8-bit/color RGBA, non-interlaced
            // giranimals/hat7.png:  PNG image data, 1000 x 673, 8-bit/color RGBA, non-interlaced
        ]),
        head: new Set([
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/head1.small.png',
                aspect: 833/1000,
                base: new Anchor(new Victor(-0.297,.103842), new Victor(.548, .18)),
                docks: {scalp: new Anchor(new Victor(-.119, -0.431572629), new Victor(.323, .009603842))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/head2.small.png',
                aspect: 1389/1000,
                base: Anchor.fromString('-0.5   -0.186825054    0.835   0.5687545'),
                docks: {scalp: new Anchor(new Victor(-.119, -0.431572629), new Victor(.323, .009603842))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/head3.small.png',
                aspect: 836/1000,
                base: Anchor.fromString('-0.472 0.498803828 0.942   0'),
                docks: {scalp: Anchor.fromString('-0.255 0.023923445 0.185   -0.295454545')},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/head5.small.png',
                aspect: 762/1000,
                base: Anchor.fromString('-0.425 0.13648294  0.545   0.270341207'),
                docks: {scalp: Anchor.fromString('-0.104 -0.427821522    0.215   -0.057742782')},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/head6.small.png',
                aspect: 1280/1000,
                base: new Anchor(new Victor(-0.359,.5), new Victor(0.62, 0)),
                docks: {scalp: new Anchor(new Victor(-0.238, -0.2203125), new Victor(0.373, 0.02109375))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/head7.small.png',
                aspect: 873/1000,
                base: Anchor.fromString('-0.43  0.259450172 0.493   0.234822451'),
                docks: {scalp: Anchor.fromString('0.075  -0.416380298    0.165   -0.03207331')},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/head8.small.png',
                aspect: 715/1000,
                base: Anchor.fromString('-0.5   0.108391608 0.716   0.384615385'),
                docks: {scalp: Anchor.fromString('-0.085 -0.460839161    0.2 -0.013986014')},
            }),
        ]),
        body: new Set([
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body1.small.png',
                aspect: 2700/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(0.09, -0.301111111), new Victor(0.223703704, 0.112592593))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body2.small.png',
                aspect: 2544/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(-0.015330189, -0.224074074), new Victor(0.220125786, 0.192592593))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body3.small.png',
                aspect: 1103/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(0.198888889, -0.346781505), new Victor(0, 0.743427017))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body5.small.png',
                aspect: 2390/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(0.276666667, -0.244351464), new Victor(0.085925926, 0.033472803))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body6.small.png',
                aspect: 3694/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(-0.09962963, -0.090416892), new Victor(0.271111111, -0.001082837))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body7.small.png',
                aspect: 2974/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(0.104074074, -0.186953598), new Victor(0.222962963, 0))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body8.small.png',
                aspect: 5905/2700,
                base: new Anchor(new Victor(-.85, .5), new Victor(1.7, 0)),
                docks: {neck: new Anchor(new Victor(-0.222592593, -0.264098222), new Victor(0.517037037, 0))},
            }),
        ]),
        platform: new Anchor(new Victor(100, 450), new Victor(300, 0)),
    };
    $scope.bodyTr = function() {
        return Transform.solve($scope.components.body.current().base, $scope.components.platform, $scope.components.body.current().aspect);
    };
    $scope.headTr = function() {
        return Transform.solve($scope.components.head.current().base, 
                $scope.bodyTr().onAnchor($scope.components.body.current().docks.neck),
                $scope.components.head.current().aspect);
    }
    $scope.hatTr = function() {
        return Transform.solve($scope.components.hat.current().base, 
                $scope.headTr().onAnchor($scope.components.head.current().docks.scalp),
                $scope.components.hat.current().aspect);
    }

    $scope.shuffle = function() {
        $scope.components.hat.shuffle();
        $scope.components.head.shuffle();
        $scope.components.body.shuffle();
    }
});
app.directive('segmentDisplay', function() {
    return {
        scope: {
            set: '=component',
            zindex: '@',
            tr: '&transformFunc',
        },
        controller: function($scope) {
            $scope.getTrStyle = function() {
                var style = $scope.tr().getStyle();
                style['z-index'] = $scope.zindex;
                return style;
            }
        },
        template: '<img class=canvas_element ng-src="{{ set.current().src }}" ng-style="getTrStyle()" />',
    };
});
