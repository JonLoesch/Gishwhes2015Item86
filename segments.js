function Anchor(p, v) {
    this.p = p;
    this.v = v;
}
// Anchor.prototype.p = function() { return this.p; };
// Anchor.prototype.v = function() { return this.v; };

function Transform(translate, scale, rotate) {
    this.translate = translate;
    this.scale = scale;
    this.rotate = rotate;
};
Transform.prototype.onAnchor = function(a) {
    return new Anchor(this.onPoint(a.p), this.onVector(a.v));
};
Transform.prototype.onPoint = function(p) {
    return this.onVector(p).add(this.translate);
};
Transform.prototype.onVector = function(v) {
    return v.clone().multiply(new Victor(this.scale, this.scale)).rotate(this.rotate);
};
Transform.prototype.onTr = function(tr) {
    var test = new Anchor(new Victor(0, 0), new Victor(1, 0));
    var r = this.onAnchor(test);
    console.log(this.onAnchor(tr.onAnchor(test)));
    var result = new Transform(r.p, r.v.length(), r.v.angle());
    console.log(result.onAnchor(test));
    return result;
};
Transform.prototype.getStyle = function() {
    var rotateStr = 'rotate(' + (this.rotate * 180 / 3.1415) + 'deg)';
    var xUnit = this.onVector(new Victor(1, 0));
    var yUnit = this.onVector(new Victor(0, 1));
    var trString = 'matrix(' +
        xUnit.x + ',' + xUnit.y + ',' +
        yUnit.x + ',' + yUnit.y + ',' +
        this.translate.x + ',' + this.translate.y + ')';
    return {
        '-ms-transform': trString, /* IE 9 */
        '-webkit-transform': trString, /* Chrome, Safari, Opera */
        'transform': trString,
    }
};
Transform.solve = function(fromAnchor, toAnchor) {
    var rotate = toAnchor.v.angle() - fromAnchor.v.angle();
    var scale = Math.sqrt(toAnchor.v.lengthSq() / fromAnchor.v.lengthSq());
    var notQuite = new Transform(new Victor(0, 0), scale, rotate);
    return new Transform(notQuite.onPoint(fromAnchor.p).subtract(toAnchor.p).invert(), scale, rotate);
};

/*
base = new Anchor(new Victor(-1, -1), new Victor(1, 0));
target = new Anchor(new Victor(0, 1), new Victor(1, 1));
tr = Transform.solve(target, base);

console.log(base);
console.log(target);
console.log(tr);

console.log(tr.onAnchor(target));
*/

function Segment(init) {
    this.name   = init.name;
    this.src    = init.src;
    this.aspect = init.aspect;
    this.base   = init.base;
    this.docks  = init.docks;
}
function Set(elems) {
    var currentIndex = 0;

    this.current = function() {
        return elems[currentIndex];
    };

    this.backward = function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex += elems.length;
        }
    };

    this.forward = function() {
        currentIndex++;
        if (currentIndex >= elems.length) {
            currentIndex -= elems.length;
        }
    };
    this.shuffle = function() {
        currentIndex = Math.floor(Math.random() * elems.length);
    }
}

