import { useSceneFrame } from "components/graphics/SceneRuntime";
import type * as THREE from "three";
import { useRef, useEffect } from "react";

export default function Electron() {
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
