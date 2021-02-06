import { Suspense } from "react";
import * as THREE from "three";
import Plane from "../Plane";

import { useGLTF } from "@react-three/drei";

function Computer() {
  const gltf = useGLTF("/models/computer.glb");

  return (
    <primitive
      object={gltf.scene}
      scale={[7, 7, 7]}
      rotation={[0, Math.PI, 0]}
    />
  );
}

export default function DiceGraphic() {
  return (
    <>
      <Suspense fallback={null}>
        <Computer />
      </Suspense>
      <Plane />
    </>
  );
}
