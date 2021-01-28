import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

import { useFrame } from "react-three-fiber";
import { useSpring, animated } from "@react-spring/three";

import Plane from "../../Plane";
import ProjectionScreen from "./ProjectionScreen";
import DoubleSlits from "./DoubleSlits";
import { GraphicContentProps } from "../../../../types/Scene";

function Electron() {
  const meshRef = useRef<THREE.Mesh>();
  function reset() {
    meshRef.current?.position.set(0, -1, 5);
    meshRef.current?.rotation.set(0, 0, 0);

    meshRef.current?.rotateY(Math.random() - 0.5);
    meshRef.current?.rotateX(Math.random() * 0.4 - 0.2);
  }

  useEffect(() => {
    reset();
  }, []);

  useFrame(() => {
    if (meshRef.current === undefined) return;
    meshRef.current.translateZ(-0.5);

    if (meshRef.current.position.z < 0.6) {
      reset();
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <sphereBufferGeometry args={[0.08, 8, 8]} />
      <meshLambertMaterial color="#228be6" />
    </mesh>
  );
}

export default function ElectronSlitsGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const particlesProps = useSpring({
    config: {
      tension: 100,
    },
    position: (paragraphIndex > 0 ? [0, 0, -0.1] : [0, 0, -0.5]) as any,
  });

  const particles = useMemo(() => {
    const list = [];
    for (let i = 0; i < 33; i++) {
      list.push(
        <mesh key={3 * i} position={[-3.8 + Math.random(), -i * 0.08, -4]}>
          <sphereBufferGeometry args={[0.08, 8, 8]} />
          <meshLambertMaterial color="#228be6" />
        </mesh>
      );

      list.push(
        <mesh key={3 * i + 1} position={[3.7 - Math.random(), -i * 0.08, -4]}>
          <sphereBufferGeometry args={[0.08, 8, 8]} />
          <meshLambertMaterial color="#228be6" />
        </mesh>
      );

      list.push(
        <mesh
          key={3 * i + 2}
          position={[-0.6 + Math.random(), -i * 0.12 + 1.2, -4]}
        >
          <sphereBufferGeometry args={[0.08, 8, 8]} />
          <meshLambertMaterial color="#228be6" />
        </mesh>
      );
    }
    return list;
  }, []);

  return (
    <>
      <ProjectionScreen />
      <DoubleSlits position={[0, -1.4, 0.5]} />

      <animated.group {...particlesProps}>{particles}</animated.group>

      <mesh position={[0, -1, 5]}>
        <boxBufferGeometry args={[1.0, 0.6, 0.5]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <Electron />

      <Plane />
    </>
  );
}
