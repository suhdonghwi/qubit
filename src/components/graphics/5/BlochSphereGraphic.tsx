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
    phi: 0,
    theta: t,
  });

  return (
    <>
      <Text
        fontSize={0.7}
        font={fonts.raleway}
        position={[0, 4.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Bloch Sphere
      </Text>

      <AnimatedSphere radius={2} phi={phi} theta={theta} position={[0, 0, 0]} />
      <Plane opacity={0.3} />
    </>
  );
}
