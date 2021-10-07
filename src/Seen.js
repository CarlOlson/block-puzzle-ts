"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Seen {
    constructor(cuboid) {
        this.value = [];
        this.cuboid = cuboid;
    }
    hasSeen(point) {
        const key = this.cuboid.keyOf(point);
        return this.value[key];
    }
    see(point) {
        const key = this.cuboid.keyOf(point);
        this.value[key] = true;
    }
    unsee(point) {
        const key = this.cuboid.keyOf(point);
        this.value[key] = false;
    }
    withPoint(point, fn) {
        this.see(point);
        const result = fn();
        this.unsee(point);
        return result;
    }
}
exports.default = Seen;
