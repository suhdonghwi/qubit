import ImpactPattern from "./ImpactPattern";
import { useSceneFrame } from "components/graphics/SceneRuntime";
import { positionProps } from "utils/AnimatedVector";
import { useEffect, useRef } from "react";
import * as THREE from "three";


import { useSpring, animated } from "@react-spring/three";

import Plane from "../../Plane";
import ProjectionScreen from "./ProjectionScreen";
import DoubleSlits from "./DoubleSlits";
import { GraphicContentProps } from "../../../../types/Scene";

function Electron() {
  const meshRef = useRef<THREE.Mesh>(null);
  function reset() {
    meshRef.current?.position.set(0, -1, 5);
    meshRef.current?.rotation.set(0, 0, 0);

    meshRef.current?.rotateY(Math.random() - 0.5);
    meshRef.current?.rotateX(Math.random() * 0.4 - 0.2);
  }

  useEffect(() => {
    reset();
  }, []);

  useSceneFrame((_, delta) => {
    if (meshRef.current == null) return;
    meshRef.current.translateZ(-30 * Math.min(delta, 0.05));

    if (meshRef.current.position.z < 0.6) {
      reset();
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshLambertMaterial color="#228be6" />
    </mesh>
  );
}

export default function ElectronSlitsGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const particlesSpring = useSpring<{ position: [number, number, number] }>({
    config: {
      tension: 100,
    },
    position: paragraphIndex > 0 ? [0, 0, -0.1] : [0, 0, -0.5],
  });


  return (
    <>
      <ProjectionScreen />
      <DoubleSlits position={[0, -1.4, 0.5]} />

      <animated.group {...positionProps(particlesSpring.position)}><ImpactPattern observed={false} /></animated.group>

      <mesh position={[0, -1, 5]}>
        <boxGeometry args={[1.0, 0.6, 0.5]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <Electron />

      <Plane />
    </>
  );
}
