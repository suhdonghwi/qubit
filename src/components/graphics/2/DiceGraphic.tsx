import { Suspense, useRef } from "react";
import * as THREE from "three";
import Plane from "../Plane";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

function Dice() {
  const { nodes } = useGLTF("/models/dice.glb");
  const groupRef = useRef<THREE.Group>();

  useFrame(() => {
    if (groupRef.current !== undefined) {
      groupRef.current.rotation.x = groupRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 1, 0]}>
      <mesh
        geometry={(nodes["buffer-0-mesh-0"] as THREE.Mesh).geometry}
        castShadow
      >
        <meshLambertMaterial color="white" />
      </mesh>
      <mesh geometry={(nodes["buffer-0-mesh-0_1"] as THREE.Mesh).geometry}>
        <meshLambertMaterial color="#495057" />
      </mesh>
    </group>
  );
}

export default function DiceGraphic() {
  return (
    <>
      <Suspense fallback={null}>
        <Dice />
        <Plane />
      </Suspense>
    </>
  );
}
