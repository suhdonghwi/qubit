import * as THREE from "three";

import { useFrame } from "react-three-fiber";

interface WaveProps {
  xOffset: number;
  yOffset: number;

  frequency: number;
  amplitude: number;
}

export default function Wave({
  xOffset,
  yOffset,
  frequency,
  amplitude,
}: WaveProps) {
  const plane = new THREE.PlaneGeometry(9, 9, 40, 40);

  function f(x: number, y: number, anim: number) {
    const z =
      amplitude *
        Math.sin(
          Math.sqrt((x - xOffset) ** 2 + (y + yOffset) ** 2) * frequency - anim
        ) +
      amplitude *
        Math.sin(
          Math.sqrt((x + xOffset) ** 2 + (y + yOffset) ** 2) * frequency - anim
        );

    return z;
  }

  useFrame(() => {
    const a = performance.now() * 0.01;
    plane.vertices.forEach((v) => {
      v.z = f(v.x, v.y, a);
    });

    plane.computeVertexNormals();

    plane.verticesNeedUpdate = true;
  });

  return (
    <mesh geometry={plane} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <meshLambertMaterial color="#ced4da" side={THREE.DoubleSide} />
    </mesh>
  );
}
