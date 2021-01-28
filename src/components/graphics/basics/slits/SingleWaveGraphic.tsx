import { animated, useSpring } from "@react-spring/three";

import { GraphicContentProps } from "../../../../types/Scene";
import ProjectionScreen from "./ProjectionScreen";
import SingleSlit from "./SingleSlit";
import Wave from "./Wave";

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

      <mesh position={[0, -1, -4.25]}>
        <boxBufferGeometry args={[0.5, 5, 0.2]} />
        <animated.meshBasicMaterial
          color="#e64980"
          transparent
          opacity={screenOpacity}
        />
      </mesh>

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
