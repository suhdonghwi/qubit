import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

import { useSpring } from "@react-spring/three";

interface FunctionPlaneProps {
  run: boolean;
  loop?: boolean;
  tension?: number;
  f: (x: number, y: number, anim: number) => number;
}

function FunctionPlane({ run, loop, tension, f }: FunctionPlaneProps) {
  const plane = useRef<THREE.PlaneGeometry>(null);

  const { anim } = useSpring({
    config: {
      tension,
    },
    from: {
      anim: 0,
    },
    to: async (next) => {
      if (loop) {
        while (1) {
          await next({ anim: 0 });
          await next({ anim: 1 });
        }
      } else if (run) {
        await next({ anim: 1 });
      }
    },
  });

  useFrame(() => {
    const geometry = plane.current;
    if (!geometry) return;
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      position.setZ(i, f(position.getX(i), position.getY(i), anim.get()));
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
  });

  return (
    <mesh
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, -2.9, 0]}
    >
      <planeGeometry ref={plane} args={[9, 9, 30, 30]} />
      <meshLambertMaterial color="#ced4da" side={THREE.DoubleSide} />
    </mesh>
  );
}

export default FunctionPlane;
