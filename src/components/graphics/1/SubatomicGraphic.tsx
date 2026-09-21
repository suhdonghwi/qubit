import { useSceneFrame } from "components/graphics/SceneRuntime";
import React, { useRef } from "react";
import * as THREE from "three";

import Plane from "../Plane";

export function BohrAtom() {
  const groupRef = useRef<THREE.Group>(null);
  const electronsRef = useRef<THREE.Group>(null);

  const elapsed = useRef(0);
  useSceneFrame((_, delta) => {
    elapsed.current += delta;
    if (groupRef.current != null && electronsRef.current != null) {
      const time = elapsed.current * 5;
      groupRef.current.rotation.set(time * 0.5, time * 0.5, 0);
      electronsRef.current.rotation.set(0, time * 0.5, 0);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-0.2, 0, 0]} castShadow>
        <sphereGeometry args={[0.2, 24, 16]} />
        <meshLambertMaterial color="#ff8787" />
      </mesh>

      <mesh position={[0, 0.2, -0.2]} castShadow>
        <sphereGeometry args={[0.2, 24, 16]} />
        <meshLambertMaterial color="#ff8787" />
      </mesh>

      <mesh position={[0.2, 0, 0]} castShadow>
        <sphereGeometry args={[0.2, 24, 16]} />
        <meshLambertMaterial color="#adb5bd" />
      </mesh>

      <mesh position={[0.1, 0.2, 0]} castShadow>
        <sphereGeometry args={[0.2, 24, 16]} />
        <meshLambertMaterial color="#adb5bd" />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.03, 16, 64]} />
        <meshLambertMaterial color="#adb5bd" transparent opacity={0.2} />
      </mesh>

      <group ref={electronsRef}>
        <mesh castShadow position={[2, 0, 0]}>
          <sphereGeometry args={[0.1, 24, 16]} />
          <meshLambertMaterial color="#748ffc" />
        </mesh>

        <mesh castShadow position={[-2, 0, 0]}>
          <sphereGeometry args={[0.1, 24, 16]} />
          <meshLambertMaterial color="#748ffc" />
        </mesh>
      </group>
    </group>
  );
}

export default function SubatomicGraphic() {
  return (
    <>
      <BohrAtom />
      <Plane />
    </>
  );
}
