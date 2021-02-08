import { useSpring, animated } from "@react-spring/three";
import { Text } from "@react-three/drei";

import Plane from "../Plane";
import BlochSphere from "../BlochSphere";
import { GraphicContentProps } from "types/Scene";
import fonts from "fonts.json";

const AnimatedSphere = animated(BlochSphere);

export default function BlochSphereGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  let t = Math.PI / 4;
  switch (paragraphIndex) {
    case 1:
      t = 0;
      break;
    case 2:
      t = Math.PI;
      break;
    case 3:
      t = Math.PI / 2;
      break;
  }

  const { phi, theta } = useSpring({
    phi: -Math.PI / 8,
    theta: t,
  });

  return (
    <>
      <Text
        fontSize={1}
        font={fonts.raleway}
        position={[0, 3, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Bloch Sphere
      </Text>

      <AnimatedSphere
        radius={2}
        phi={phi}
        theta={theta}
        position={[0, -2, 0]}
      />
    </>
  );
}
