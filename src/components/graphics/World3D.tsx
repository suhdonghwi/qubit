import { OrthographicCamera } from "@react-three/drei";
import React, { useLayoutEffect, useState, useRef } from "react";

import { Canvas } from "react-three-fiber";

interface World3DProps {
  children: React.ReactNode;
}

export default function World3D({ children }: World3DProps) {
  const cameraRef = useRef<typeof OrthographicCamera>();
  const [zoom, setZoom] = useState(0);

  const onResize = () => {
    if (window.innerWidth <= 1100) setZoom(30);
    else if (window.innerWidth <= 1300) setZoom(40);
    else setZoom(50);
  };

  useLayoutEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  return (
    <Canvas shadowMap gl={{ antialias: false }}>
      <OrthographicCamera
        ref={cameraRef}
        position={[0, 5, 10]}
        rotation={[-Math.PI / 8, 0, 0]}
        zoom={zoom}
        makeDefault
      />
      {children}
    </Canvas>
  );
}
