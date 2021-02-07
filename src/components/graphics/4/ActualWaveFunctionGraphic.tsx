import * as THREE from "three";
import { Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import FunctionPlane from "../FunctionPlane";
import { GraphicContentProps } from "types/Scene";

import Plane from "../Plane";
import fonts from "fonts.json";

function f1(x: number, y: number, anim: number) {
  const spread = 1,
    amplitude = 5 - anim * 7.5;

  const xOffset = -1.5,
    yOffset = -1.5;

  return (
    -amplitude *
    Math.exp(
      -(
        (Math.pow(x - xOffset, 2) + Math.pow(y - yOffset, 2)) /
        (2 * Math.pow(spread, 2))
      )
    )
  );
}

function f2(x: number, y: number, anim: number) {
  const spread = 1,
    amplitude = 2 + anim * 1.5;

  const xOffset = 1.5,
    yOffset = 1.5;

  return (
    -amplitude *
    Math.exp(
      -(
        (Math.pow(x - xOffset, 2) + Math.pow(y - yOffset, 2)) /
        (2 * Math.pow(spread, 2))
      )
    )
  );
}

function f(x: number, y: number, anim: number) {
  return f1(x, y, anim) + f2(x, y, anim);
}

const AnimatedText = animated(Text);

export default function ActualWaveFunctionGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const { wrongPosition, correctPosition, titleOpacity } = useSpring({
    wrongPosition: [-2, paragraphIndex > 0 ? 1.5 : 3, -2] as any,
    correctPosition: [2, paragraphIndex > 0 ? 1.4 : -0.1, 2] as any,
    titleOpacity: paragraphIndex,
  });

  return (
    <>
      <FunctionPlane run={paragraphIndex > 0} f={f} />
    </>
  );
}
