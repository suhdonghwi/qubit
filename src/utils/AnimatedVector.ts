import type { SpringValue } from "@react-spring/three";

/** Animate scalar axes to keep tuple animation independent of R3F's vector types. */
export function positionProps(value: SpringValue<[number, number, number]>) {
  return {
    "position-x": value.to((x) => x),
    "position-y": value.to((_, y) => y),
    "position-z": value.to((_, __, z) => z),
  };
}

export function rotationProps(value: SpringValue<[number, number, number]>) {
  return {
    "rotation-x": value.to((x) => x),
    "rotation-y": value.to((_, y) => y),
    "rotation-z": value.to((_, __, z) => z),
  };
}
