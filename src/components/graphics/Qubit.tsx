import { useFrame, MeshProps } from "react-three-fiber";
import * as THREE from "three";

import { animated, useSpring } from "@react-spring/three";
import interpolate from "color-interpolate";

import { perlin3 } from "./perlin.js";

interface QubitProps {
  oneProbability: number;
  size: number;
}

export default function Qubit({
  oneProbability,
  size,
  ...props
}: QubitProps & MeshProps) {
  const geometry = new THREE.SphereGeometry(0.1, 64, 64);

  const colormap = interpolate(["#339af0", "#f06595"]),
    unstability = -2 * Math.abs(oneProbability - 0.5) + 1;
  const { factor, color } = useSpring({
    factor: unstability * 0.2,
    color: colormap(oneProbability),
  });

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
    <mesh geometry={geometry} castShadow {...props}>
      <animated.meshLambertMaterial color={color} />
    </mesh>
  );
}
