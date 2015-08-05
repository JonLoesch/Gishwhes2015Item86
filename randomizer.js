var app = angular.module('GISHWHES', []);
app.controller('randomizer', function($scope) {
    $scope.components = {
        head: new Set([
            new Segment({
                name: {first: 'rat', last: 'rat'},
                src: '/Gishwhes 2015/Item 86/head_0.png',
                aspect: 545/793,
                base: new Anchor(new Victor(-.52, .5), new Victor(.60, 0)),
                docks: {},
            }),
            new Segment({
                name: {first: 'wolf', last: 'wolf'},
                src: '/Gishwhes 2015/Item 86/head_2.png',
                aspect: 94/122,
                base: new Anchor(new Victor(-.25, .5), new Victor(.45, 0)),
                docks: {},
            }),
        ]),
        body: new Set([
            new Segment({
                name: {first: 'fog', last: 'fog'},
                src: '/Gishwhes 2015/Item 86/body_0.png',
                aspect: 753/1625,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(0, -.50), new Victor(.30, 0))},
            }),
            new Segment({
                name: {first: 'cock', last: 'cock'},
                src: '/Gishwhes 2015/Item 86/body_2.png',
                aspect: 297/298,
                base: new Anchor(new Victor(-.5, .5), new Victor(1, 0)),
                docks: {neck: new Anchor(new Victor(.19, -.11), new Victor(.19, 0)) },
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
