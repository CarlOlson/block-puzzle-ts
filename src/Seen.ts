import type Point from "./Point";
import type Cuboid from "./Cuboid";

class Seen {
  value: boolean[];
  cuboid: Cuboid;

  constructor(cuboid: Cuboid) {
    this.value = [];
    this.cuboid = cuboid;
  }

  hasSeen(point: Point): boolean {
    const key = this.cuboid.keyOf(point);
    return this.value[key];
  }

  see(point: Point) {
    const key = this.cuboid.keyOf(point);
    this.value[key] = true;
  }

  unsee(point: Point) {
    const key = this.cuboid.keyOf(point);
    this.value[key] = false;
  }

  withPoint<T>(point: Point, fn: () => T): T {
    this.see(point);
    const result = fn();
    this.unsee(point);
    return result;
  }
}

export default Seen;
