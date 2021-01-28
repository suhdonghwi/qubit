import { animated, useSpring } from "@react-spring/three";

import { GraphicContentProps } from "../../../../types/Scene";
import ProjectionScreen from "./ProjectionScreen";
import DoubleSlits from "./DoubleSlits";
import Wave from "./Wave";

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

      <mesh position={[0, -1, -4.25]}>
        <boxBufferGeometry args={[0.5, 5, 0.2]} />
        <animated.meshBasicMaterial
          color="#e64980"
          transparent
          opacity={screenOpacity}
        />
      </mesh>

      <mesh position={[-3, -1.5, -4.25]}>
        <boxBufferGeometry args={[0.5, 3, 0.2]} />
        <animated.meshBasicMaterial
          color="#e64980"
          transparent
          opacity={screenOpacity}
        />
      </mesh>

      <mesh position={[3, -1.5, -4.25]}>
        <boxBufferGeometry args={[0.5, 3, 0.2]} />
        <animated.meshBasicMaterial
          color="#e64980"
          transparent
          opacity={screenOpacity}
        />
      </mesh>

      <Wave
        xOffset={paragraphIndex > 0 ? 1.5 : 0}
        yOffset={-4.5}
        amplitude={0.15}
        frequency={5}
        position={[0, -2.5, 0]}
        width={9}
        height={9}
        lod={paragraphIndex > 0 ? 60 : 50}
      />
    </>
  );
}
