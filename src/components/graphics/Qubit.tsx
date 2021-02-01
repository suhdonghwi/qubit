import { useMemo } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { simplex3 } from "./perlin.js";
import * as THREE from "three";

import interpolate from "color-interpolate";
import { animated, useSpring } from "@react-spring/three";

interface QubitProps {
  oneProbability: number;
  size: number;
}

const colormap = interpolate(["#339af0", "#f06595"]);

export default function Qubit({
  oneProbability,
  size,
  ...props
}: QubitProps & MeshProps) {
  const unstability = -2 * Math.abs(oneProbability - 0.5) + 1;
  const { factor } = useSpring({
    factor: unstability * 0.15,
  });

  const sphereSpring = useSpring({
    config: {
      tension: 100,
    },
    color: colormap(oneProbability),
  });

  const geometry = useMemo(() => new THREE.SphereGeometry(0.1, 20, 20), []);

  useFrame(() => {
    const time = performance.now() * 0.001,
      k = 1;

    for (let i = 0; i < geometry.vertices.length; i++) {
      const p = geometry.vertices[i];
      p.normalize().multiplyScalar(
        size + factor.get() * simplex3(p.x * k + time, p.y * k, p.z * k)
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
