import React from "react";
import styled from "styled-components/macro";

import { animated, useSpring } from "@react-spring/three";

import World3D from "./graphics/World3D";

const Container = styled.section`
  position: relative;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface GraphicsViewerProps {
  graphicsList: (JSX.Element | undefined)[];
  index: number;
}

export default function GraphicsViewer({
  graphicsList,
  index,
}: GraphicsViewerProps) {
  const currentPos: [number, number, number] = [-index * 12, 0, 0];
  const posProps = useSpring({
    position: currentPos as any,
  });

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
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <animated.group {...posProps}>
          {graphicsList.map((g, i) => (
            <group
              key={i}
              position={[i * 12, 0, 0]}
              rotation={[0, Math.PI / 4, 0]}
            >
              {g}
            </group>
          ))}
        </animated.group>
      </World3D>
    </Container>
  );
}
