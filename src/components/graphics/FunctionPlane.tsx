import * as THREE from "three";
import { useFrame } from "react-three-fiber";

import { useSpring } from "@react-spring/three";

interface FunctionPlaneProps {
  run: boolean;
  loop?: boolean;
  tension?: number;
  f: (x: number, y: number, anim: number) => number;
}

function FunctionPlane({ run, loop, tension, f }: FunctionPlaneProps) {
  const plane = new THREE.PlaneGeometry(9, 9, 30, 30);

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
    plane.vertices.forEach((v) => {
      v.z = f(v.x, v.y, anim.get());
    });

    plane.computeVertexNormals();
    plane.verticesNeedUpdate = true;
  });

  return (
    <mesh
      geometry={plane}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, -2.9, 0]}
    >
      <meshLambertMaterial color="#ced4da" side={THREE.DoubleSide} />
    </mesh>
  );
}

export default FunctionPlane;
