function Anchor(p, v) {
    this.p = p;
    this.v = v;
}
// Anchor.prototype.p = function() { return this.p; };
// Anchor.prototype.v = function() { return this.v; };

function Transform(q_x, q_y, q_z) {
    this.q_x = q_x;
    this.q_y = q_y;
    this.q_z = q_z;
};
Transform.prototype.onAnchor = function(a) {
    return new Anchor(this.onPoint(a.p), this.onVector(a.v));
};
Transform.prototype.onPoint = function(p) {
    return this.onVector(p).add(this.q_z);
};
Transform.prototype.onVector = function(v) {
    return this.q_x.clone().multiply(new Victor(v.x, v.x)).add(this.q_y.clone().multiply(new Victor(v.y, v.y)));
};
Transform.prototype.onTr = function(tr) {
    return new Transform(this.onVector(tr.q_x), this.onVector(tr.q_y), this.onPoint(tr.q_z));
    var test = new Anchor(new Victor(0, 0), new Victor(1, 0));
    var r = this.onAnchor(test);
    console.log(this.onAnchor(tr.onAnchor(test)));
    var result = new Transform(r.p, r.v.length(), r.v.angle());
    console.log(result.onAnchor(test));
    return result;
};
Transform.prototype.getStyle = function() {
    var xUnit = this.onVector(new Victor(1, 0));
    var yUnit = this.onVector(new Victor(0, 1));
    var trString = 'matrix(' +
        this.q_x.x + ',' + this.q_x.y + ',' +
        this.q_y.x + ',' + this.q_y.y + ',' +
        this.q_z.x + ',' + this.q_z.y + ')';
    return {
        '-ms-transform': trString, /* IE 9 */
        '-webkit-transform': trString, /* Chrome, Safari, Opera */
        'transform': trString,
    }
};
Transform.scale = function(xScalar, yScalar) {
    return new Transform(new Victor(xScalar, 0), new Victor(0, yScalar), new Victor(0, 0));
};
Transform.rotate = function(angle) {
    var s = Math.sin(angle);
    var c = Math.cos(angle);
    return new Transform(new Victor(c, s), new Victor(-s, c), new Victor(0, 0));
};
Transform.solve = function(fromAnchor, toAnchor, aspect) {
    var scale = Transform.scale(1, aspect);
    return Transform.solveWithoutAspect(scale.onAnchor(fromAnchor), toAnchor).onTr(scale);
};
Transform.solveWithoutAspect = function(fromAnchor, toAnchor) {
    var rotate = Transform.rotate(toAnchor.v.angle() - fromAnchor.v.angle());
    var scale = Math.sqrt(toAnchor.v.lengthSq() / fromAnchor.v.lengthSq());
    var notQuite = rotate.onTr(Transform.scale(scale, scale));
    notQuite.q_z = notQuite.onPoint(fromAnchor.p).subtract(toAnchor.p).invert();
    return notQuite;
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

