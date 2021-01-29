import { useSpring } from "@react-spring/three";
import * as THREE from "three";

import { GraphicContentProps } from "../../../../types/Scene";
import ProjectionScreen from "./ProjectionScreen";
import DoubleSlits from "./DoubleSlits";
import Wave from "./Wave";
import ProbCurve from "./ProbCurve";

export default function DoubleWaveGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const { slitPosition, screenOpacity } = useSpring({
    slitPosition: (paragraphIndex > 0
      ? [0, -1.4, 4.5]
      : [0, -1.4, -4.5]) as any,
    screenOpacity: paragraphIndex > 0 ? 1 : 0,
  });

  return (
    <>
      <DoubleSlits position={slitPosition} />
      <ProjectionScreen opacity={screenOpacity} />

      <ProbCurve
        opacity={screenOpacity}
        points={[
          new THREE.Vector3(-4.3, -3.5, -4.25),
          new THREE.Vector3(-3.2, -1, -4.25),
          new THREE.Vector3(-1.7, -3, -4.25),
          new THREE.Vector3(0, 0.5, -4.25),
          new THREE.Vector3(1.7, -3, -4.25),
          new THREE.Vector3(3.2, -1, -4.25),
          new THREE.Vector3(4.3, -3.5, -4.25),
        ]}
      />

      <Wave
        xOffset={paragraphIndex > 0 ? 1.5 : 0}
        yOffset={-4.5}
        amplitude={0.15}
        frequency={5}
        position={[0, -2.5, 0]}
        width={9}
        height={9}
        lod={paragraphIndex > 0 ? 30 : 20}
      />
    </>
  );
}
