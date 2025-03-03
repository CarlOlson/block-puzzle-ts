import Point from "./Point";
import Cuboid from "./Cuboid";

const cube3 = new Cuboid(3, 3, 3);
const cube123 = new Cuboid(1, 2, 3);
const origin = new Point(0, 0, 0);
const center = new Point(1, 1, 1);

describe("Cuboid", () => {
  describe("neighborsOf", () => {
    test("origin", () => {
      const result = cube3.neighborsOf(origin);
      expect(result.length).toEqual(3);
      expect(result).toEqual(
        expect.arrayContaining([
          new Point(1, 0, 0),
          new Point(0, 1, 0),
          new Point(0, 0, 1),
        ])
      );
    });

    test("center", () => {
      const result = cube3.neighborsOf(center);
      expect(result.length).toEqual(6);
      expect(result).toEqual(
        expect.arrayContaining([
          new Point(0, 1, 1),
          new Point(1, 0, 1),
          new Point(1, 1, 0),
          new Point(2, 1, 1),
          new Point(1, 2, 1),
          new Point(1, 1, 2),
        ])
      );
    });

    test("opposite of origin", () => {
      const result = cube3.neighborsOf(new Point(2, 2, 2));
      expect(result.length).toEqual(3);
      expect(result).toEqual(
        expect.arrayContaining([
          new Point(2, 2, 1),
          new Point(2, 1, 2),
          new Point(1, 2, 2),
        ])
      );
    });
  });

  describe("keyOf", () => {
    test("returns unique integer of a containing point", () => {
      expect(cube3.keyOf(origin)).toEqual(0);
      expect(cube123.keyOf(origin)).toEqual(0);

      expect(cube3.keyOf(center)).toEqual((1 * 3 + 1) * 3 + 1);
      expect(cube123.keyOf(center)).toEqual((1 * 2 + 1) * 1 + 1);
    });
  });
});
