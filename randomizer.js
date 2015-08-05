var app = angular.module('GISHWHES', []);
app.controller('randomizer', function($scope) {
    $scope.components = {
        head: new Set([
            new Segment({
                src: '/Gishwhes 2015/Item 86/head_0.png',
                aspect: 545/793,
                base: new Anchor(new Victor(-.52, .5), new Victor(.72, 0)),
                docks: {},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/head_2.png',
                aspect: 94/122,
                base: new Anchor(new Victor(-.25, .5), new Victor(.45 *72/60, 0)),
                docks: {},
            }),
        ]),
        body: new Set([
            // giranimals/hat1.png:  PNG image data, 1000 x 625, 8-bit/color RGBA, non-interlaced
            // giranimals/hat2.png:  PNG image data, 1000 x 1000, 8-bit/color RGBA, non-interlaced
            // giranimals/hat3.png:  PNG image data, 1000 x 573, 8-bit/color RGBA, non-interlaced
            // giranimals/hat4.png:  PNG image data, 1000 x 778, 8-bit/color RGBA, non-interlaced
            // giranimals/hat5.png:  PNG image data, 1000 x 591, 8-bit/color RGBA, non-interlaced
            // giranimals/hat6.png:  PNG image data, 1000 x 912, 8-bit/color RGBA, non-interlaced
            // giranimals/hat7.png:  PNG image data, 1000 x 673, 8-bit/color RGBA, non-interlaced
            // giranimals/head1.png: PNG image data, 1000 x 833, 8-bit/color RGBA, non-interlaced
            // giranimals/head2.png: PNG image data, 1000 x 1389, 8-bit/color RGBA, non-interlaced
            // giranimals/head3.png: PNG image data, 1000 x 836, 8-bit/color RGBA, non-interlaced
            // giranimals/head4.png: PNG image data, 1000 x 1566, 8-bit/color RGBA, non-interlaced
            // giranimals/head5.png: PNG image data, 1000 x 762, 8-bit/color RGBA, non-interlaced
            // giranimals/head6.png: PNG image data, 1000 x 1280, 8-bit/color RGBA, non-interlaced
            // giranimals/head7.png: PNG image data, 1000 x 873, 8-bit/color RGBA, non-interlaced
            // giranimals/head8.png: PNG image data, 1000 x 715, 8-bit/color RGBA, non-interlaced

            
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body1.png',
                aspect: 2700/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(0.09, -0.301111111), new Victor(0.223703704, 0.112592593))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body2.png',
                aspect: 2544/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(-0.015330189, -0.224074074), new Victor(0.220125786, 0.192592593))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body3.png',
                aspect: 1103/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(0.198888889, -0.346781505), new Victor(0, 0.743427017))},
            }),
            // new Segment({
            //     src: '/Gishwhes 2015/Item 86/giranimals/body4.png',
            //     aspect: 1759/2700,
            //     base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
            //     docks: {neck: new Anchor(new Victor(-0.5, -0.5), new Victor(0, 0))},
            // }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body5.png',
                aspect: 2390/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(0.276666667, -0.244351464), new Victor(0.085925926, 0.033472803))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body6.png',
                aspect: 3694/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(-0.09962963, -0.090416892), new Victor(0.271111111, -0.001082837))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body7.png',
                aspect: 2974/2700,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(0.104074074, -0.186953598), new Victor(0.222962963, 0))},
            }),
            new Segment({
                src: '/Gishwhes 2015/Item 86/giranimals/body8.png',
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

    $scope.shuffle = function() {
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
