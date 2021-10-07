"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cuboid_1 = __importDefault(require("./Cuboid"));
const Point_1 = __importDefault(require("./Point"));
const Seen_1 = __importDefault(require("./Seen"));
describe("Seen", () => {
    let seen;
    beforeEach(() => {
        let cube = new Cuboid_1.default(3, 3, 3);
        seen = new Seen_1.default(cube);
    });
    test("hasSeen should be falsy by default", () => {
        expect(seen.hasSeen(Point_1.default.origin)).toBeFalsy();
    });
    test("see should mark a point", () => {
        seen.see(Point_1.default.origin);
        expect(seen.hasSeen(Point_1.default.origin)).toBe(true);
    });
    test("unsee should unmark a point", () => {
        seen.see(Point_1.default.origin);
        seen.unsee(Point_1.default.origin);
        expect(seen.hasSeen(Point_1.default.origin)).toBe(false);
    });
    test("withPoint should mark and unmark a point", () => {
        expect.assertions(2);
        seen.withPoint(Point_1.default.origin, () => {
            expect(seen.hasSeen(Point_1.default.origin)).toBe(true);
        });
        expect(seen.hasSeen(Point_1.default.origin)).toBe(false);
    });
});
