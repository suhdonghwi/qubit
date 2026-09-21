import * as THREE from "three";

import { animated, SpringValue } from "@react-spring/three";

interface ProbCurveProps {
  points: THREE.Vector3[];
  opacity: SpringValue<number> | number;
  color?: string;
}

export default function ProbCurve({ points, opacity, color }: ProbCurveProps) {
  const curve = new THREE.CatmullRomCurve3(points);


  return (
    <mesh position={[0, 1, 0]}>
      <tubeGeometry args={[curve, 64, 0.1, 8]} />
      <animated.meshBasicMaterial
        color={color || "#c92a2a"}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}
