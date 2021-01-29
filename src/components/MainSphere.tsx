import React from "react";

import { Canvas } from "react-three-fiber";
import WobblySphere from "./graphics/WobblySphere";

export default function MainSphere() {
  return (
    <Canvas
      orthographic
      camera={{ zoom: 100 }}
      style={{ position: "absolute", top: 0, left: "60vw", width: "450px" }}
    >
      <pointLight position={[-2, 0, 0]} />

      <WobblySphere
        size={1.1}
        position={[-0.5, -1.5, -3]}
        factor={0.5}
        color="#495057"
      />

      <mesh position={[-1, 2, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusBufferGeometry args={[1.2, 0.4, 16, 100]} />
        <meshLambertMaterial color="#343a40" />
      </mesh>
      <mesh position={[1, 0, 0]} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
        <cylinderGeometry args={[0.7, 0.7, 2, 100]} />
        <meshLambertMaterial color="#343a40" />
      </mesh>
    </Canvas>
  );
}
