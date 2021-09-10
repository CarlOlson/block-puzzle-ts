"use strict";

const util = require("util");

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

  [util.inspect.custom]() {
    return this.toString();
  }
}

Point.origin = new Point(0, 0, 0);

module.exports = Point;
