import ImpactPattern from "./ImpactPattern";
import { positionProps } from "utils/AnimatedVector";
import { Suspense } from "react";

import { useSpring, animated } from "@react-spring/three";
import { useTexture } from "@react-three/drei";

import Plane from "../../Plane";
import ProjectionScreen from "./ProjectionScreen";
import DoubleSlits from "./DoubleSlits";
import Electron from "./Electron";

import { GraphicContentProps } from "types/Scene";

function Eyes() {
  const texture = useTexture("/eye.png");

  return (
    <mesh position={[1.5, 0, 2.3]} castShadow>
      <boxGeometry args={[0.7, 0.7, 0.7]} />
      <meshLambertMaterial attach="material-0" color="#ced4da" />
      <meshBasicMaterial attach="material-1" map={texture} />
      <meshLambertMaterial attach="material-2" color="#ced4da" />
      <meshLambertMaterial attach="material-3" color="#ced4da" />
      <meshLambertMaterial attach="material-4" color="#ced4da" />
      <meshLambertMaterial attach="material-5" color="#ced4da" />
    </mesh>
  );
}

export default function ElectronObserveGraphic({
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

      <animated.group {...positionProps(particlesSpring.position)}>
        <ImpactPattern observed={true} />
      </animated.group>

      <mesh position={[0, -1, 5]}>
        <boxGeometry args={[1.0, 0.6, 0.5]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <Suspense fallback={null}>
        <Eyes />
      </Suspense>

      <Electron />
      <Plane />
    </>
  );
}
