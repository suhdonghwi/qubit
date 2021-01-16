import React, { useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components/macro";

import { Canvas, useFrame } from "react-three-fiber";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  z-index: 0;
`;

function QuantumSphere() {
  const sphereMesh = useRef();

  const [rot, setRot] = useState(0);

  useFrame(() => {
    setRot(rot + 0.1);
  });

  return (
    <group>
      <mesh position={[2.5, 0, 0]} ref={sphereMesh}>
        <sphereBufferGeometry args={[1.5, 64, 64]} />
        <meshPhongMaterial color="#6590FF" />
      </mesh>
    </group>
  );
}
export default function MainSphere() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useLayoutEffect(() => {
    function onResize(e: any) {
      setSize({ width: e.target.innerWidth, height: e.target.innerHeight});
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <Canvas
        style={{
          position: "absolute",
          zIndex: -2,
          ...size,
        }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 3]} />
        <QuantumSphere />
      </Canvas>
      <Overlay />
    </>
  );
}
