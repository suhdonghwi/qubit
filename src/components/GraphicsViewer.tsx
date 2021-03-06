import React, { useMemo, useRef } from "react";

import { animated, useSpring } from "@react-spring/three";

import World3D from "./graphics/World3D";
import { GraphicContent } from "../types/Scene";
import useViewerStore from "../stores/ViewerStore";

interface GraphicsViewerProps {
  graphics: GraphicContent[];
}

function Graphics({ graphics }: GraphicsViewerProps) {
  const { sceneIndex, paragraphIndex } = useViewerStore((state) => state);

  const groupSpring = useSpring<{ position: any }>({
    position: [-sceneIndex * 17, 0, 0],
  });

  const rendered = useRef<JSX.Element[]>();

  useMemo(() => {
    if (rendered.current === undefined) {
      rendered.current = graphics.map((G) => (
        <G paragraphIndex={paragraphIndex} />
      ));
    } else {
      const Graphic = graphics[sceneIndex];
      rendered.current[sceneIndex] = (
        <Graphic paragraphIndex={paragraphIndex} />
      );
    }
    // eslint-disable-next-line
  }, [graphics, paragraphIndex]);

  return (
    <animated.group {...groupSpring}>
      {rendered.current &&
        rendered.current.map((content, i) => (
          <group
            key={i}
            position={[i * 17, 0, 0]}
            rotation={[0, Math.PI / 4, 0]}
          >
            {content}
          </group>
        ))}
    </animated.group>
  );
}

export default function GraphicsViewer({ graphics }: GraphicsViewerProps) {
  return (
    <World3D>
      <ambientLight intensity={0.1} />
      <pointLight
        intensity={0.5}
        position={[5, 15, 5]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Graphics graphics={graphics} />
    </World3D>
  );
}
