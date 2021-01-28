import React from "react";

import { Canvas } from "react-three-fiber";

interface World3DProps {
  children: React.ReactNode;
}

export default function World3D({ children }: World3DProps) {
  return (
    <Canvas shadowMap orthographic camera={{ zoom: 50, position: [0, 5, 10] }}>
      {children}
    </Canvas>
  );
}
