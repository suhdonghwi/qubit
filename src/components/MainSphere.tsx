import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import styled from "styled-components/macro";

import { useSpring, animated } from "@react-spring/three";
import { Canvas } from "react-three-fiber";

const StyledCanvas = styled(Canvas)`
  position: absolute !important;
  top: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
`;

export default function MainSphere() {
  const torusRef = useRef<THREE.Mesh>();
  const boxRef = useRef<THREE.Mesh>();
  const cylinderRef = useRef<THREE.Mesh>();

  function onScroll() {
    const scroll = document.documentElement.scrollTop;

    if (torusRef.current)
      torusRef.current.rotation.x = Math.PI / 4 + scroll / 150;

    if (boxRef.current) boxRef.current.rotation.y = scroll / 200;

    if (cylinderRef.current)
      cylinderRef.current.rotation.z = Math.PI / 6 + scroll / 300;
  }

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const { torusPos, cylinderPos, boxPos } = useSpring<{
    boxPos: any;
    torusPos: any;
    cylinderPos: any;
  }>({
    config: {
      tension: 100,
    },
    from: {
      boxPos: [-1.5, -8, 0],
      torusPos: [-1.2, 6, 0],
      cylinderPos: [1.5, -5, 0],
    },
    to: async (next) => {
      await next({
        boxPos: [-1.5, -2.5, 0],
        torusPos: [-1.2, 2.5, 0],
        cylinderPos: [1.5, -0.5, 0],
      });

      while (1) {
        await next({
          boxPos: [-1.5, -3 + Math.random(), 0],
          torusPos: [-1.2, 2 + Math.random(), 0],
          cylinderPos: [1.5, -1 + Math.random(), 0],
        });

        await next({
          boxPos: [-1.5, -3 + Math.random(), 0],
          torusPos: [-1.2, 2 + Math.random(), 0],
          cylinderPos: [1.5, -1 + Math.random(), 0],
        });
      }
    },
  });

  return (
    <StyledCanvas orthographic camera={{ zoom: 100 }}>
      <pointLight position={[-2, 0, 1]} intensity={0.5} />
      <ambientLight intensity={0.1} />

      <animated.mesh
        ref={boxRef}
        position={boxPos}
        rotation={[Math.PI / 4, 0, Math.PI / 3]}
      >
        <boxBufferGeometry args={[1.7, 1.7, 1.7]} />
        <meshLambertMaterial color="#495057" />
      </animated.mesh>

      <animated.mesh
        ref={torusRef}
        position={torusPos}
        rotation={[Math.PI / 4, Math.PI / 4, 0]}
      >
        <torusBufferGeometry args={[1.2, 0.4, 32, 100]} />
        <meshLambertMaterial color="#495057" />
      </animated.mesh>

      <animated.mesh
        ref={cylinderRef}
        position={cylinderPos}
        rotation={[Math.PI / 4, 0, Math.PI / 6]}
      >
        <cylinderGeometry args={[1.3, 1.3, 3, 100]} />
        <meshLambertMaterial color="#495057" />
      </animated.mesh>
    </StyledCanvas>
  );
}
