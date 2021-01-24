import React from "react";

import { Canvas } from "react-three-fiber";

interface World3DProps {
  children: React.ReactElement;
}
export default function World3D({ children }: World3DProps) {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      {children}
    </Canvas>
  );
}
