import * as THREE from "three";

import { useSpring } from "@react-spring/three";

import { GraphicContentProps } from "types/Scene";
import ProjectionScreen from "./ProjectionScreen";
import SingleSlit from "./SingleSlit";
import Wave from "./Wave";
import ProbCurve from "./ProbCurve";

export default function SingleWaveGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const { position, screenOpacity } = useSpring({
    position: (paragraphIndex > 0 ? [0, -1.4, 4.5] : [0, -1.4, -4.5]) as any,
    screenOpacity: paragraphIndex > 0 ? 1 : 0,
  });

  return (
    <>
      <SingleSlit position={position} />
      <ProjectionScreen opacity={screenOpacity} />

      <ProbCurve
        opacity={screenOpacity}
        points={[
          new THREE.Vector3(-4, -3.5, -4.25),
          new THREE.Vector3(-1.5, -3, -4.25),
          new THREE.Vector3(0, 0.5, -4.25),
          new THREE.Vector3(1.5, -3, -4.25),
          new THREE.Vector3(4, -3.5, -4.25),
        ]}
      />

      <Wave
        xOffset={0}
        yOffset={-5}
        amplitude={0.15}
        frequency={3}
        position={[0, -2.5, 0]}
        width={9}
        height={9}
      />
    </>
  );
}
