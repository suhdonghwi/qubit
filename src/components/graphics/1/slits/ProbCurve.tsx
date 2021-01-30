import * as THREE from "three";

import { animated, SpringValue } from "@react-spring/three";

interface ProbCurveProps {
  points: THREE.Vector3[];
  opacity: SpringValue<number> | number;
  color?: string;
}

export default function ProbCurve({ points, opacity, color }: ProbCurveProps) {
  const curve = new THREE.CatmullRomCurve3(points);

  const tube = new THREE.BufferGeometry().fromGeometry(
    new THREE.TubeGeometry(curve, undefined, 0.1)
  );

  return (
    <mesh geometry={tube} position={[0, 1, 0]}>
      <animated.meshBasicMaterial
        color={color || "#c92a2a"}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}
