export type Measurement = 0 | 1;

function assertProbability(value: number) {
  if (!Number.isFinite(value) || value < 0 || value > 1) {
    throw new RangeError("Probability must be between zero and one.");
  }
}

/** Randomness is supplied by the user action, never sampled during rendering. */
export function measure(probabilityOne: number, sample: number): Measurement {
  assertProbability(probabilityOne);
  if (!Number.isFinite(sample) || sample < 0 || sample >= 1) {
    throw new RangeError("A random sample must be in [0, 1).");
  }
  return sample < probabilityOne ? 1 : 0;
}

export function thetaFromProbability(probabilityOne: number): number {
  assertProbability(probabilityOne);
  return 2 * Math.asin(Math.sqrt(probabilityOne));
}

export function probabilityFromTheta(theta: number): number {
  return Math.sin(theta / 2) ** 2;
}

export function blochVector(theta: number, phi: number): [number, number, number] {
  return [Math.sin(theta) * Math.cos(phi), Math.sin(theta) * Math.sin(phi), Math.cos(theta)];
}
