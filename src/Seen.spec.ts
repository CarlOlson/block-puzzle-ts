import Cuboid from "./Cuboid";
import Point from "./Point";
import Seen from "./Seen";

describe("Seen", () => {
  let seen: Seen;

  beforeEach(() => {
    let cube = new Cuboid(3, 3, 3);
    seen = new Seen(cube);
  });

  test("hasSeen should be falsy by default", () => {
    expect(seen.hasSeen(Point.origin)).toBeFalsy();
  });

  test("see should mark a point", () => {
    seen.see(Point.origin);
    expect(seen.hasSeen(Point.origin)).toBe(true);
  });

  test("unsee should unmark a point", () => {
    seen.see(Point.origin);
    seen.unsee(Point.origin);
    expect(seen.hasSeen(Point.origin)).toBe(false);
  });

  test("withPoint should mark and unmark a point", () => {
    expect.assertions(2);
    seen.withPoint(Point.origin, () => {
      expect(seen.hasSeen(Point.origin)).toBe(true);
    });
    expect(seen.hasSeen(Point.origin)).toBe(false);
  });
});
