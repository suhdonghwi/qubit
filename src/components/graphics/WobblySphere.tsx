import * as THREE from "three";
import { animated } from "@react-spring/three";
import { useFrame, MeshProps } from "react-three-fiber";

import { perlin3 } from "./perlin.js";

interface WobblySphereProps {
  size: number;
  factor: number;
  color: string;
}

export default function WobblySphere({
  size,
  factor,
  color,
  ...props
}: WobblySphereProps & MeshProps) {
  const geometry = new THREE.SphereGeometry(0.1, 64, 64);

  useFrame(() => {
    const time = performance.now() * 0.001,
      k = 1;

    for (let i = 0; i < geometry.vertices.length; i++) {
      const p = geometry.vertices[i];
      p.normalize().multiplyScalar(
        size + factor * perlin3(p.x * k + time, p.y * k, p.z * k)
      );
    }

    geometry.verticesNeedUpdate = true; //must be set or vertices will not update
  });

  return (
    <mesh geometry={geometry} castShadow {...props}>
      <animated.meshLambertMaterial color={color} />
    </mesh>
  );
}
