import React from "react";

import { Canvas } from "react-three-fiber";

export default function World3D() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <mesh>
        <torusBufferGeometry args={[1.5, 0.08, 16, 64]} />
        <meshLambertMaterial color="white" />
      </mesh>
    </Canvas>
  );
}
