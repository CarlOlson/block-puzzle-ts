"use strict";

const Point = require("./Point");

class Cuboid {
  constructor(x, y, z) {
    this.size = new Point(x, y, z);
  }

  neighborsOf(point) {
    const neighbors = [];
    if (point.x >= 1) {
      neighbors.push(point.offset(-1, 0, 0));
    }
    if (point.y >= 1) {
      neighbors.push(point.offset(0, -1, 0));
    }
    if (point.z >= 1) {
      neighbors.push(point.offset(0, 0, -1));
    }
    if (point.x < this.size.x - 1) {
      neighbors.push(point.offset(1, 0, 0));
    }
    if (point.y < this.size.y - 1) {
      neighbors.push(point.offset(0, 1, 0));
    }
    if (point.z < this.size.z - 1) {
      neighbors.push(point.offset(0, 0, 1));
    }
    return neighbors;
  }

  numberOfPoints() {
    return this.size.x * this.size.y * this.size.z;
  }

  keyOf(point) {
    return point.x + this.size.x * (point.y + this.size.y * point.z);
  }
}

module.exports = Cuboid;
