import { useSpring, animated } from "@react-spring/three";

import Plane from "../Plane";
import BlochSphere from "../BlochSphere";
import { GraphicContentProps } from "types/Scene";

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
      <AnimatedSphere radius={2} phi={phi} theta={theta} />
      <Plane />
    </>
  );
}
