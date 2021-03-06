import React from "react";

import Plane from "../Plane";

import { useSpring, animated } from "@react-spring/three";

export default function QuantumComputerGraphic() {
  const quantumMeshSpring = useSpring<{ position: any }>({
    from: { position: [0, -0.3, 0] },
    to: async (next) => {
      while (1) {
        await next({ position: [0, -0.7, 0] });
        await next({ position: [0, -0.2, 0] });
      }
    },
  });

  const quantumMaterialSpring = useSpring({
    from: { color: "#ff6b6b" },
    to: async (next) => {
      while (1) {
        await next({ color: "#845ef7" });
        await next({ color: "#ff6b6b" });
      }
    },
  });

  return (
    <>
      <mesh receiveShadow castShadow position={[0, -1.7, 0]}>
        <boxBufferGeometry args={[2, 1, 2]} />
        <meshLambertMaterial color="#4dabf7" />
      </mesh>

      <mesh position={[0, 1, 0]}>
        <boxBufferGeometry args={[2, 0.5, 2]} />
        <meshLambertMaterial color="#4dabf7" />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[-0.95, -0.2, 0]}>
        <boxBufferGeometry args={[2, 2, 0.1]} />
        <meshLambertMaterial color="white" transparent opacity={0.2} />
      </mesh>

      <mesh rotation={[0, 0, 0]} position={[0, -0.2, 0.95]}>
        <boxBufferGeometry args={[2, 2, 0.1]} />
        <meshLambertMaterial color="white" transparent opacity={0.2} />
      </mesh>

      <animated.mesh castShadow {...quantumMeshSpring}>
        <sphereBufferGeometry args={[0.3, 64, 64]} />
        <animated.meshLambertMaterial {...quantumMaterialSpring} />
      </animated.mesh>

      <Plane />
    </>
  );
}
