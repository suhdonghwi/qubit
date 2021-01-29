import React, { useState } from "react";

import Plane from "../Plane";

import { useFrame } from "react-three-fiber";

export function BohrAtom() {
  const [time, setTime] = useState(0);

  useFrame(() => {
    setTime((t) => t + 0.05);
  });

  return (
    <group rotation={[time * 0.5, time * 0.5, 0]}>
      <mesh position={[-0.2, 0, 0]} castShadow>
        <sphereBufferGeometry args={[0.2, 64, 64]} />
        <meshLambertMaterial color="#ff8787" />
      </mesh>

      <mesh position={[0, 0.2, -0.2]} castShadow>
        <sphereBufferGeometry args={[0.2, 64, 64]} />
        <meshLambertMaterial color="#ff8787" />
      </mesh>

      <mesh position={[0.2, 0, 0]} castShadow>
        <sphereBufferGeometry args={[0.2, 64, 64]} />
        <meshLambertMaterial color="#adb5bd" />
      </mesh>

      <mesh position={[0.1, 0.2, 0]} castShadow>
        <sphereBufferGeometry args={[0.2, 64, 64]} />
        <meshLambertMaterial color="#adb5bd" />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusBufferGeometry args={[2, 0.03, 16, 64]} />
        <meshLambertMaterial color="#adb5bd" transparent opacity={0.2} />
      </mesh>

      <mesh position={[Math.sin(time) * 2, 0, Math.cos(time) * 2]} castShadow>
        <sphereBufferGeometry args={[0.1, 64, 64]} />
        <meshLambertMaterial color="#748ffc" />
      </mesh>

      <mesh
        position={[
          Math.sin(time + Math.PI) * 2,
          0,
          Math.cos(time + Math.PI) * 2,
        ]}
        castShadow
      >
        <sphereBufferGeometry args={[0.1, 64, 64]} />
        <meshLambertMaterial color="#748ffc" />
      </mesh>
    </group>
  );
}

export default function SubatomicGraphic() {
  return (
    <>
      <BohrAtom />
      <Plane />
    </>
  );
}
