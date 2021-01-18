import React, { useRef, useState } from "react";
import styled from "styled-components/macro";

import { Canvas, useFrame } from "react-three-fiber";

import interpolate from "color-interpolate";
import * as THREE from "three";

import palette from "../palette";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
  z-index: 0;
`;

function QuantumSphere() {
  const sphereMesh = useRef();
  const colormap = interpolate([palette.blueQuantum, palette.redQuantum]);

  const [scrollRatio, setScrollRatio] = useState(0);
  const [rot, setRot] = useState(0);

  useFrame(() => {
    setScrollRatio(document.documentElement.scrollTop / window.innerHeight);
    setRot(rot + 0.05);
  });

  const qubitPos1 = new THREE.Vector3(4, -1 + scrollRatio * 5, -2),
    qubitPos2 = new THREE.Vector3(-6, 3 - scrollRatio * 2, -5);

  return (
    <>
      <group>
        <mesh position={qubitPos1} ref={sphereMesh}>
          <sphereBufferGeometry args={[1.3, 64, 64]} />
          <meshLambertMaterial
            color={colormap(scrollRatio * 3)}
            opacity={0.8}
            transparent
          />
        </mesh>

        <mesh
          rotation={[
            0.2 + scrollRatio * 3,
            0.3 + scrollRatio * 10,
            0.4 + scrollRatio * 10,
          ]}
          position={qubitPos1}
        >
          <torusBufferGeometry args={[1.5, 0.08, 16, 64]} />
          <meshLambertMaterial color={colormap(1 - scrollRatio * 3)} />
        </mesh>
      </group>

      <group>
        <mesh position={qubitPos2} ref={sphereMesh}>
          <sphereBufferGeometry args={[1.3, 64, 64]} />
          <meshLambertMaterial
            color={colormap(1 - scrollRatio * 3)}
            opacity={0.8}
            transparent
          />
        </mesh>

        <mesh
          rotation={[
            0.6 + scrollRatio * 3,
            1.4 + scrollRatio * 10,
            1.3 + scrollRatio * 10,
          ]}
          position={qubitPos2}
        >
          <torusBufferGeometry args={[1.5, 0.08, 16, 64]} />
          <meshLambertMaterial color={colormap(scrollRatio * 3)} />
        </mesh>
      </group>
    </>
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
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, -3]} intensity={0.5} />
        <QuantumSphere />
      </Canvas>
      <Overlay />
    </>
  );
}
