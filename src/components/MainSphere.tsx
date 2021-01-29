import React, { useState, useEffect } from "react";
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
  const [scroll, setScroll] = useState(document.body.scrollTop);

  function onScroll() {
    setScroll(document.documentElement.scrollTop);
  }

  useEffect(() => {
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
        position={boxPos}
        rotation={[Math.PI / 4, scroll / 200, Math.PI / 3]}
      >
        <boxBufferGeometry args={[1.7, 1.7, 1.7]} />
        <meshLambertMaterial color="#495057" />
      </animated.mesh>

      <animated.mesh
        position={torusPos}
        rotation={[Math.PI / 4 + scroll / 150, Math.PI / 4, 0]}
      >
        <torusBufferGeometry args={[1.2, 0.4, 32, 100]} />
        <meshLambertMaterial color="#495057" />
      </animated.mesh>

      <animated.mesh
        position={cylinderPos}
        rotation={[Math.PI / 4, 0, Math.PI / 6 + scroll / 300]}
      >
        <cylinderGeometry args={[1.3, 1.3, 3, 100]} />
        <meshLambertMaterial color="#495057" />
      </animated.mesh>
    </StyledCanvas>
  );
}
