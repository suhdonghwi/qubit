import { Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import FunctionPlane from "../FunctionPlane";
import { GraphicContentProps } from "types/Scene";

import fonts from "fonts.json";
import bell from "utils/BellFunction";

function f1(x: number, y: number, anim: number) {
  const spread = 0.8,
    amplitude = 4;

  const xOffset = -2 + anim * 2,
    yOffset = -2 + anim * 2;

  return bell(spread, amplitude, xOffset, yOffset, x, y);
}

function f2(x: number, y: number, anim: number) {
  const spread = 0.8,
    amplitude = -3;

  const xOffset = 2 - anim * 2,
    yOffset = 2 - anim * 2;

  return bell(spread, amplitude, xOffset, yOffset, x, y);
}

function f(x: number, y: number, anim: number) {
  return f1(x, y, anim) + f2(x, y, anim);
}

export default function DestructiveGraphic() {
  return (
    <>
      <Text
        fontSize={0.7}
        font={fonts.raleway}
        position={[0, 3, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Destructive
      </Text>

      <FunctionPlane run loop tension={100} f={f} />
    </>
  );
}
