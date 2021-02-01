import { useMemo } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { perlin3 } from "./perlin.js";
import * as THREE from "three";

import { animated, useSpring } from "@react-spring/three";

interface QubitProps {
  oneProbability: number;
  size: number;
}

export default function Qubit({
  oneProbability,
  size,
  ...props
}: QubitProps & MeshProps) {
  const unstability = -2 * Math.abs(oneProbability - 0.5) + 1;
  const { factor } = useSpring({
    factor: unstability * 0.4,
  });

  const sphereSpring = useSpring({
    config: {
      tension: 100,
    },
    from: { color: "#339af0" },
    to: async (next) => {
      while (1) {
        await next({
          color: "#339af0",
        });
        await next({
          color: "#f06595",
        });
      }
    },
  });

  const geometry = useMemo(() => new THREE.SphereGeometry(0.1, 64, 64), []);

  useFrame(() => {
    const time = performance.now() * 0.001,
      k = 1;

    for (let i = 0; i < geometry.vertices.length; i++) {
      const p = geometry.vertices[i];
      p.normalize().multiplyScalar(
        size + factor.get() * perlin3(p.x * k + time, p.y * k, p.z * k)
      );
    }

    geometry.verticesNeedUpdate = true; //must be set or vertices will not update
  });

  return (
    <>
      <mesh geometry={geometry} {...props} castShadow>
        <animated.meshLambertMaterial {...sphereSpring} />
      </mesh>
    </>
  );
}
