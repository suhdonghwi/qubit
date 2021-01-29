import React, { useState, useMemo } from "react";
import styled from "styled-components/macro";

import { animated, useSpring } from "@react-spring/three";

import World3D from "./graphics/World3D";
import { GraphicContent } from "../types/Scene";
import useViewerStore from "../stores/ViewerStore";

const Container = styled.section`
  position: relative;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface GraphicsViewerProps {
  graphics: GraphicContent[];
}

function Graphics({ graphics }: GraphicsViewerProps) {
  const { sceneIndex, paragraphIndex } = useViewerStore((state) => state);

  const currentPos = [-sceneIndex * 17, 0, 0];
  const groupSpring = useSpring<{ position: any }>({
    position: currentPos,
  });

  const [prev, setPrev] = useState<JSX.Element[] | null>(null);
  const renderedGraphics: JSX.Element[] = useMemo<JSX.Element[]>(() => {
    if (prev !== null) {
      const G = graphics[sceneIndex];
      prev[sceneIndex] = <G paragraphIndex={paragraphIndex} />;
      return prev;
    } else {
      const r = graphics.map((G) => <G paragraphIndex={paragraphIndex} />);
      setPrev(r);
      return r;
    }
    // eslint-disable-next-line
  }, [graphics, paragraphIndex]);

  return (
    <animated.group {...groupSpring}>
      {renderedGraphics.map((content, i) => (
        <group key={i} position={[i * 17, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
          {content}
        </group>
      ))}
    </animated.group>
  );
}

export default function GraphicsViewer({ graphics }: GraphicsViewerProps) {
  return (
    <Container>
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
    </Container>
  );
}
