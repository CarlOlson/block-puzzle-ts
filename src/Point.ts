class Point {
  static origin = new Point(0, 0, 0);

  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  offset(x: number, y: number, z: number) {
    return new Point(this.x + x, this.y + y, this.z + z);
  }

  toString() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}

export default Point;
