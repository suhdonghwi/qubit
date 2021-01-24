import React from "react";
import styled from "styled-components/macro";

import { Canvas, useFrame } from "react-three-fiber";
import { useSpring } from "react-spring/three";

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

function Content({ graphicsList, index }: GraphicsViewerProps) {
  const { pos } = useSpring({
    pos: [index * 3, 0, 0],
  });

  useFrame(({ camera }) => {
    camera.position.setX(pos.get()[0]);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      {graphicsList
        .filter((e) => e !== undefined)
        .map((g, i) => (
          <group position={[i * 3, 0, 0]}>{g}</group>
        ))}
    </>
  );
}

export default function GraphicsViewer(props: GraphicsViewerProps) {
  return (
    <Container>
      <Canvas>
        <Content {...props} />
      </Canvas>
    </Container>
  );
}
