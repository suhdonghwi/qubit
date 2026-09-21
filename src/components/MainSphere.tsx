import { useInView } from "react-intersection-observer";
import { useMediaQuery, usePageVisible } from "../utils/useMediaQuery";
import { positionProps } from "utils/AnimatedVector";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { styled } from "styled-components";

import { useSpring, animated } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";

const StyledCanvas = styled(Canvas)`
  position: absolute !important;
  height: calc(100vh + 150px) !important;
  top: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
`;

export default function MainSphere() {
  const { ref, inView } = useInView();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const visible = usePageVisible();
  const running = inView && visible && !reducedMotion;
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const cylinderRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    function onScroll() {
      const scroll = document.documentElement.scrollTop;

      if (torusRef.current)
        torusRef.current.rotation.x = Math.PI / 4 + scroll / 150;

      if (boxRef.current) boxRef.current.rotation.y = scroll / 200;

      if (cylinderRef.current)
        cylinderRef.current.rotation.z = Math.PI / 6 + scroll / 300;
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { torusPos, cylinderPos, boxPos } = useSpring<{
    boxPos: [number, number, number];
    torusPos: [number, number, number];
    cylinderPos: [number, number, number];
  }>({
    pause: !running,
    config: {
      tension: 100,
    },
    from: {
      boxPos: [-1.5, reducedMotion ? -1.5 : -8, 0],
      torusPos: [-1.2, reducedMotion ? 3 : 6, 0],
      cylinderPos: [1.5, reducedMotion ? 0.5 : -5, 0],
    },
    to: async (next) => {
      if (
        (
          await next({
            boxPos: [-1.5, -1.5, 0],
            torusPos: [-1.2, 3, 0],
            cylinderPos: [1.5, 0.5, 0],
          })
        ).cancelled
      )
        return;

      let active = true;
      while (active) {
        active = !(
          await next({
            boxPos: [-1.5, -2 + Math.random(), 0],
            torusPos: [-1.2, 2.5 + Math.random(), 0],
            cylinderPos: [1.5, Math.random(), 0],
          })
        ).cancelled;
        if (!active) return;

        if (
          (
            await next({
              boxPos: [-1.5, -2 + Math.random(), 0],
              torusPos: [-1.2, 2.5 + Math.random(), 0],
              cylinderPos: [1.5, -0.5 + Math.random(), 0],
            })
          ).cancelled
        )
          return;
      }
    },
  });

  return (
    <StyledCanvas
      ref={ref}
      dpr={[1, 1.5]}
      frameloop={running ? "always" : "demand"}
      orthographic
      camera={{ zoom: 100 }}
    >
      <directionalLight position={[-2, 0, 1]} intensity={1} />
      <ambientLight intensity={0.4} />

      <animated.mesh
        ref={boxRef}
        {...(reducedMotion
          ? { position: [-1.5, -1.5, 0] as [number, number, number] }
          : positionProps(boxPos))}
        rotation={[Math.PI / 4, 0, Math.PI / 3]}
      >
        <boxGeometry args={[1.7, 1.7, 1.7]} />
        <meshLambertMaterial color="#495057" />
      </animated.mesh>

      <animated.mesh
        ref={torusRef}
        {...(reducedMotion
          ? { position: [-1.2, 3, 0] as [number, number, number] }
          : positionProps(torusPos))}
        rotation={[Math.PI / 4, Math.PI / 4, 0]}
      >
        <torusGeometry args={[1.2, 0.4, 32, 100]} />
        <meshLambertMaterial color="#495057" />
      </animated.mesh>

      <animated.mesh
        ref={cylinderRef}
        {...(reducedMotion
          ? { position: [1.5, 0.5, 0] as [number, number, number] }
          : positionProps(cylinderPos))}
        rotation={[Math.PI / 4, 0, Math.PI / 6]}
      >
        <cylinderGeometry args={[1.3, 1.3, 3, 100]} />
        <meshLambertMaterial color="#495057" />
      </animated.mesh>
    </StyledCanvas>
  );
}
