import React, { useRef } from "react";
import * as THREE from "three";

import Plane from "../Plane";

import { useFrame } from "react-three-fiber";

export function BohrAtom() {
  const groupRef = useRef<THREE.Group>();
  const electronsRef = useRef<THREE.Group>();

  useFrame(() => {
    if (groupRef.current !== undefined && electronsRef.current !== undefined) {
      const time = performance.now() * 0.005;
      groupRef.current.rotation.set(time * 0.5, time * 0.5, 0);
      electronsRef.current.rotation.set(0, time * 0.5, 0);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-0.2, 0, 0]} castShadow>
        <sphereBufferGeometry args={[0.2, 64, 64]} />
        <meshLambertMaterial color="#ff8787" />
      </mesh>

      <mesh position={[0, 0.2, -0.2]} castShadow>
        <sphereBufferGeometry args={[0.2, 64, 64]} />
        <meshLambertMaterial color="#ff8787" />
      </mesh>

      <mesh position={[0.2, 0, 0]} castShadow>
        <sphereBufferGeometry args={[0.2, 64, 64]} />
        <meshLambertMaterial color="#adb5bd" />
      </mesh>

      <mesh position={[0.1, 0.2, 0]} castShadow>
        <sphereBufferGeometry args={[0.2, 64, 64]} />
        <meshLambertMaterial color="#adb5bd" />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusBufferGeometry args={[2, 0.03, 16, 64]} />
        <meshLambertMaterial color="#adb5bd" transparent opacity={0.2} />
      </mesh>

      <group ref={electronsRef}>
        <mesh castShadow position={[2, 0, 0]}>
          <sphereBufferGeometry args={[0.1, 64, 64]} />
          <meshLambertMaterial color="#748ffc" />
        </mesh>

        <mesh castShadow position={[-2, 0, 0]}>
          <sphereBufferGeometry args={[0.1, 64, 64]} />
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
