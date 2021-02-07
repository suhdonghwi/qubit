import { Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import FunctionPlane from "../FunctionPlane";
import { GraphicContentProps } from "types/Scene";

import fonts from "fonts.json";
import bell from "utils/BellFunction";

function f1(x: number, y: number, anim: number) {
  const spread = 1,
    amplitude = 5 - anim * 7.5;

  const xOffset = -1.5,
    yOffset = -1.5;

  return bell(spread, amplitude, xOffset, yOffset, x, y);
}

function f2(x: number, y: number, anim: number) {
  const spread = 1,
    amplitude = 2 + anim * 1.5;

  const xOffset = 1.5,
    yOffset = 1.5;

  return bell(spread, amplitude, xOffset, yOffset, x, y);
}

function f(x: number, y: number, anim: number) {
  return f1(x, y, anim) + f2(x, y, anim);
}

const AnimatedText = animated(Text);

export default function ActualWaveFunctionGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const { titleOpacity } = useSpring({
    titleOpacity: paragraphIndex,
  });

  return (
    <>
      <AnimatedText
        fontSize={0.7}
        font={fonts.raleway}
        position={[0, 3, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Complex function!
        <animated.meshBasicMaterial
          color="#e9ecef"
          transparent
          opacity={titleOpacity}
        />
      </AnimatedText>

      <FunctionPlane run={paragraphIndex > 0} f={f} />
    </>
  );
}
