import React, { useRef, useState } from "react";
import styled from "styled-components/macro";

import { Canvas, useFrame } from "react-three-fiber";
import interpolate from "color-interpolate";

import palette from "../palette";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
  z-index: 0;
`;

function QuantumSphere() {
  const sphereMesh = useRef();
  const colormap = interpolate([palette.blueQuantum, palette.redQuantum]);

  const [scrollRatio, setScrollRatio] = useState(0);
  const [rot, setRot] = useState(0);

  useFrame(() => {
    setScrollRatio(
      (document.documentElement.scrollTop / window.innerHeight) * 2
    );
    setRot(rot + 0.05);
  });

  return (
    <group>
      <mesh position={[0, -0.6 + scrollRatio, -1]} ref={sphereMesh}>
        <sphereBufferGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial color={colormap(scrollRatio)} />
      </mesh>

      <mesh rotation={[rot, 1, rot * 3]} position={[0, -0.6 + scrollRatio, -1]}>
        <torusBufferGeometry args={[1.7, 0.05, 16, 64]} />
        <meshPhongMaterial color={colormap(1 - scrollRatio)} />
      </mesh>
    </group>
  );
}
export default function MainSphere() {
  return (
    <>
      <Canvas
        style={{
          position: "absolute",
          zIndex: -2,
          top: 0,
          left: window.innerWidth / 2,
          width: window.innerWidth / 2,
          height: window.innerHeight,
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 3]} />
        <QuantumSphere />
      </Canvas>
      <Overlay />
    </>
  );
}
