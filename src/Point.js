"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    offset(x, y, z) {
        return new Point(this.x + x, this.y + y, this.z + z);
    }
    toString() {
        return `(${this.x}, ${this.y}, ${this.z})`;
    }
}
Point.origin = new Point(0, 0, 0);
exports.default = Point;
