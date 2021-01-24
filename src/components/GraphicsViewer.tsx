import React from "react";
import styled from "styled-components/macro";

import { Canvas } from "react-three-fiber";

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

export default function GraphicsViewer({ graphicsList }: GraphicsViewerProps) {
  return (
    <Container>
      <Canvas>
        <ambientLight intensity={0.5} />
        {graphicsList
          .filter((e) => e !== undefined)
          .map((g, i) => (
            <group position={[i*3, 0, 0]}>{g}</group>
          ))}
      </Canvas>
    </Container>
  );
}
