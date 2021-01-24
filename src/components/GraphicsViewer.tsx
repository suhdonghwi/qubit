import React from "react";
import styled from "styled-components/macro";

import { useFrame } from "react-three-fiber";
import { useSpring } from "react-spring/three";

import World3D from "./graphics/World3D";

const Container = styled.section`
  position: relative;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function MoveCamera({ index }: { index: number }) {
  const { pos } = useSpring({
    pos: [index * 3, 0, 0],
  });

  useFrame(({ camera }) => {
    camera.position.setX(pos.get()[0]);
  });

  return null;
}

interface GraphicsViewerProps {
  graphicsList: (JSX.Element | undefined)[];
  index: number;
}

export default function GraphicsViewer({
  graphicsList,
  index,
}: GraphicsViewerProps) {
  return (
    <Container>
      <World3D>
        {graphicsList
          .filter((e) => e !== undefined)
          .map((g, i) => (
            <group position={[i * 3, 0, 0]}>{g}</group>
          ))}
        <MoveCamera index={index} />
      </World3D>
    </Container>
  );
}
