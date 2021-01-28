import { Suspense, useMemo } from "react";

import { useSpring, animated } from "@react-spring/three";
import { useTexture } from "@react-three/drei";

import Plane from "../../Plane";
import ProjectionScreen from "./ProjectionScreen";
import DoubleSlits from "./DoubleSlits";
import Electron from "./Electron";

import { GraphicContentProps } from "../../../../types/Scene";

function Eyes() {
  const texture = useTexture("eye.png");

  return (
    <mesh position={[1.5, 0, 2.3]} castShadow>
      <boxBufferGeometry args={[0.7, 0.7, 0.7]} />
      <meshLambertMaterial attachArray="material" color="#ced4da" />,
      <meshBasicMaterial attachArray="material" map={texture} />
      <meshLambertMaterial attachArray="material" color="#ced4da" />,
      <meshLambertMaterial attachArray="material" color="#ced4da" />,
      <meshLambertMaterial attachArray="material" color="#ced4da" />,
      <meshLambertMaterial attachArray="material" color="#ced4da" />,
    </mesh>
  );
}

export default function ElectronObserveGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const particlesProps = useSpring({
    position: (paragraphIndex > 0 ? [0, 0, -0.1] : [0, 0, -0.5]) as any,
  });

  const particles = useMemo(() => {
    const list = [];
    for (let i = 0; i < 50; i++) {
      list.push(
        <mesh key={2 * i} position={[-2.5 + Math.random(), -i * 0.075 + 1.2, -4]}>
          <sphereBufferGeometry args={[0.08, 8, 8]} />
          <meshLambertMaterial color="#228be6" />
        </mesh>
      );

      list.push(
        <mesh
          key={2 * i + 1}
          position={[2.5 - Math.random(), -i * 0.075 + 1.2, -4]}
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

      <Suspense fallback={null}>
        <Eyes />
      </Suspense>

      <Electron />
      <Plane />
    </>
  );
}
