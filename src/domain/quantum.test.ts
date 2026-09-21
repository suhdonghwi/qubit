import { describe, expect, it } from "vitest";
import { blochVector, measure, probabilityFromTheta, thetaFromProbability } from "./quantum";

describe("quantum lesson mathematics", () => {
  it.each([0, 0.2, 0.5, 0.8, 1])("keeps the text and Bloch sphere consistent for p=%s", (p) => {
    const theta = thetaFromProbability(p);
    expect(probabilityFromTheta(theta)).toBeCloseTo(p);
    expect(probabilityFromTheta(Math.PI - theta)).toBeCloseTo(1 - p);
  });

  it("samples deterministic states and obeys the probability boundary", () => {
    expect(measure(0, 0)).toBe(0);
    expect(measure(1, 0.999)).toBe(1);
    expect(measure(0.2, 0.199)).toBe(1);
    expect(measure(0.2, 0.2)).toBe(0);
    expect(() => measure(0.5, 1)).toThrow(RangeError);
    expect(() => thetaFromProbability(-0.1)).toThrow(RangeError);
  });

  it("maps polar angles to normalized Bloch coordinates", () => {
    expect(blochVector(0, 0)).toEqual([0, 0, 1]);
    const [x, y, z] = blochVector(Math.PI / 2, Math.PI / 2);
    expect(x).toBeCloseTo(0);
    expect(y).toBeCloseTo(1);
    expect(z).toBeCloseTo(0);
    expect(Math.hypot(x, y, z)).toBeCloseTo(1);
  });
});
