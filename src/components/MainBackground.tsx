import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";

export default function MainBackground() {
  const sphereMesh = useRef();
  const axisMesh = useRef();

  return (
    <Canvas
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
        position: "absolute",
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 3]} />

      <group position={[2, 0, 0]} rotation={[0.7, 0, -0.1]}>
        <mesh ref={sphereMesh}>
          <sphereBufferGeometry args={[1.2, 64, 64]} />
          <meshPhongMaterial color="#6590FF" />
        </mesh>

        <mesh ref={axisMesh}>
          <cylinderBufferGeometry args={[0.02, 0.02, 3.5, 32]} />
          <meshPhongMaterial color="#868e96" />
        </mesh>
      </group>
    </Canvas>
  );
}
