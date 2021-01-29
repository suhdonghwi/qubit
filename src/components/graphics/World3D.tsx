import { OrthographicCamera } from "@react-three/drei";
import React, { useLayoutEffect, useState } from "react";

import { Canvas } from "react-three-fiber";

interface World3DProps {
  children: React.ReactNode;
}

export default function World3D({ children }: World3DProps) {
  const [zoom, setZoom] = useState(0);

  const onResize = () => {
    const width =
      window.innerWidth < window.innerHeight
        ? window.innerWidth
        : window.innerWidth / 2;

    console.log(width);
    if (width <= 400) setZoom(25);
    else if (width <= 500) setZoom(30);
    else if (width <= 700) setZoom(40);
    else setZoom(45);
  };

  useLayoutEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });

  return (
    <Canvas shadowMap gl={{ antialias: false }}>
      <OrthographicCamera
        position={[0, 3.5, 10]}
        rotation={[-Math.PI / 8, 0, 0]}
        zoom={zoom}
        makeDefault
      />
      {children}
    </Canvas>
  );
}
