import { Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

import FunctionPlane from "../FunctionPlane";
import { GraphicContentProps } from "types/Scene";

import Plane from "../Plane";
import fonts from "fonts.json";
import bell from "utils/BellFunction";

function f1(x: number, y: number, anim: number) {
  const spread = 1,
    amplitude = 5 - anim * 1.5;

  const xOffset = -2,
    yOffset = -2;

  return bell(spread, amplitude, xOffset, yOffset, x, y);
}

function f2(x: number, y: number, anim: number) {
  const spread = 1,
    amplitude = 2 + anim * 1.5;

  const xOffset = 2,
    yOffset = 2;

  return bell(spread, amplitude, xOffset, yOffset, x, y);
}

function f(x: number, y: number, anim: number) {
  return f1(x, y, anim) + f2(x, y, anim);
}

const AnimatedText = animated(Text);

export default function WaveFunctionGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const { wrongPosition, correctPosition, titleOpacity } = useSpring({
    wrongPosition: [-2, paragraphIndex > 0 ? 1.5 : 3, -2] as any,
    correctPosition: [2, paragraphIndex > 0 ? 1.4 : -0.1, 2] as any,
    titleOpacity: paragraphIndex,
  });

  return (
    <>
      <AnimatedText
        fontSize={0.7}
        font={fonts.raleway}
        position={wrongPosition}
        rotation={[0, -Math.PI / 4, 0]}
        color="#e03131"
      >
        Wrong
      </AnimatedText>

      <AnimatedText
        fontSize={0.7}
        font={fonts.raleway}
        position={correctPosition}
        rotation={[0, -Math.PI / 4, 0]}
        color="#2f9e44"
      >
        Correct
      </AnimatedText>

      <AnimatedText
        fontSize={0.7}
        font={fonts.raleway}
        position={[0, 4, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        With quantum algorithm
        <animated.meshBasicMaterial
          color="#e9ecef"
          transparent
          opacity={titleOpacity}
        />
      </AnimatedText>

      <FunctionPlane run={paragraphIndex > 0} f={f} />
      <Plane />
    </>
  );
}
