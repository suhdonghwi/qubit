import { animated, useTransition } from "@react-spring/three";
import World3D from "./graphics/World3D";
import type { GraphicContent } from "../types/Scene";

interface GraphicsViewerProps {
  graphics: GraphicContent[];
  sceneIndex: number;
  paragraphIndex: number;
}

function Graphics({ graphics, sceneIndex, paragraphIndex }: GraphicsViewerProps) {
  const transitions = useTransition({ sceneIndex, paragraphIndex }, {
    keys: (item) => item.sceneIndex,
    from: { x: 12 },
    enter: { x: 0 },
    leave: { x: -12 },
    exitBeforeEnter: true,
    config: { tension: 220, friction: 30 },
  });

  return transitions(({ x }, item) => {
    const Graphic = graphics[item.sceneIndex];
    return Graphic ? (
      <animated.group position-x={x} rotation={[0, Math.PI / 4, 0]}>
        <Graphic paragraphIndex={item.paragraphIndex} />
      </animated.group>
    ) : null;
  });
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
