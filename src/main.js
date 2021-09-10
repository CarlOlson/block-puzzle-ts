"use strict";

const Cuboid = require("./Cuboid");
const Point = require("./Point");
const Seen = require("./Seen");

const withPoint = (path, point, fn) => {
  path.push(point);
  const result = fn();
  path.pop();
  return result;
};

const findPath = (cuboid, location, seen, path) => {
  if (path.length >= cuboid.numberOfPoints()) {
    return 1;
  }

  return cuboid
    .neighborsOf(location)
    .filter((point) => !seen.hasSeen(point))
    .map((point) =>
      withPoint(path, location, () =>
        seen.withPoint(location, () => findPath(cuboid, point, seen, path))
      )
    )
    .reduce((x, y) => x + y, 0);
};

const run = () => {
  const cuboid = new Cuboid(3, 3, 3),
    originPoint = Point.origin,
    edgePoint = new Point(1, 0, 0),
    facePoint = new Point(1, 1, 0),
    centerPoint = new Point(1, 1, 1);

  const seeds = [
    [originPoint, edgePoint],
    /* [edgePoint, originPoint], */
    /* [edgePoint, facePoint], */
    [facePoint, edgePoint],
    /* [centerPoint, facePoint], */
    [facePoint, centerPoint],
  ];

  return seeds.map((path) => {
    const seen = new Seen(cuboid);
    path.forEach((point) => seen.see(point));
    return findPath(cuboid, path[path.length - 1], seen, path);
  });
};

if (require.main === module) {
  console.log(run().reduce((x, y) => x + y, 0));
}
