import { useMediaQuery } from "../utils/useMediaQuery";
import { animated, SpringContext, useSpring } from "@react-spring/three";
import { Suspense, useState } from "react";
import {
  SceneActive,
  SceneRunning,
  useSceneRunning,
} from "./graphics/SceneRuntime";
import World3D from "./graphics/World3D";
import type { GraphicContent } from "../types/Scene";

interface GraphicsViewerProps {
  graphics: GraphicContent[];
  sceneIndex: number;
  paragraphIndex: number;
}

function SceneSlot({
  Graphic,
  active,
  running,
  paragraphIndex,
}: {
  Graphic: GraphicContent;
  active: boolean;
  running: boolean;
  paragraphIndex: number;
}) {
  const [lastParagraph, setLastParagraph] = useState(0);
  if (active && lastParagraph !== paragraphIndex) {
    setLastParagraph(paragraphIndex);
  }
  return (
    <SpringContext value={{ pause: !running }}>
      <SceneActive value={active}>
        <SceneRunning value={running}>
          <Suspense fallback={null}>
            <Graphic paragraphIndex={active ? paragraphIndex : lastParagraph} />
          </Suspense>
        </SceneRunning>
      </SceneActive>
    </SpringContext>
  );
}

function Graphics({
  graphics,
  sceneIndex,
  paragraphIndex,
}: GraphicsViewerProps) {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const running = useSceneRunning();
  // One moving strip keeps outgoing and incoming scenes connected in both directions.
  const { x } = useSpring({
    x: -sceneIndex * 17,
    immediate: reducedMotion,
    config: { tension: 220, friction: 30 },
  });

  return (
    <animated.group position-x={x}>
      {graphics.map((Graphic, index) => (
        <group
          key={index}
          position={[index * 17, 0, 0]}
          rotation={[0, Math.PI / 4, 0]}
        >
          <SceneSlot
            Graphic={Graphic}
            active={index === sceneIndex}
            running={running && Math.abs(index - sceneIndex) <= 1}
            paragraphIndex={paragraphIndex}
          />
        </group>
      ))}
    </animated.group>
  );
}

export default function GraphicsViewer(props: GraphicsViewerProps) {
  return (
    <World3D>
      <ambientLight intensity={0.7} />
      <directionalLight
        intensity={2.5}
        position={[5, 10, 5]}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={35}
        shadow-camera-left={-9}
        shadow-camera-right={9}
        shadow-camera-top={9}
        shadow-camera-bottom={-9}
        shadow-normalBias={0.04}
      />
      <Graphics {...props} />
    </World3D>
  );
}
