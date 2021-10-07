"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __importDefault(require("./Point"));
const Cuboid_1 = __importDefault(require("./Cuboid"));
const cube3 = new Cuboid_1.default(3, 3, 3);
const cube123 = new Cuboid_1.default(1, 2, 3);
const origin = new Point_1.default(0, 0, 0);
const center = new Point_1.default(1, 1, 1);
describe("Cuboid", () => {
    describe("neighborsOf", () => {
        test("origin", () => {
            const result = cube3.neighborsOf(origin);
            expect(result.length).toEqual(3);
            expect(result).toEqual(expect.arrayContaining([
                new Point_1.default(1, 0, 0),
                new Point_1.default(0, 1, 0),
                new Point_1.default(0, 0, 1),
            ]));
        });
        test("center", () => {
            const result = cube3.neighborsOf(center);
            expect(result.length).toEqual(6);
            expect(result).toEqual(expect.arrayContaining([
                new Point_1.default(0, 1, 1),
                new Point_1.default(1, 0, 1),
                new Point_1.default(1, 1, 0),
                new Point_1.default(2, 1, 1),
                new Point_1.default(1, 2, 1),
                new Point_1.default(1, 1, 2),
            ]));
        });
        test("opposite of origin", () => {
            const result = cube3.neighborsOf(new Point_1.default(2, 2, 2));
            expect(result.length).toEqual(3);
            expect(result).toEqual(expect.arrayContaining([
                new Point_1.default(2, 2, 1),
                new Point_1.default(2, 1, 2),
                new Point_1.default(1, 2, 2),
            ]));
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
