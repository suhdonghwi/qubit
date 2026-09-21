import { useSceneRunning } from "components/graphics/SceneRuntime";
import { useSceneFrame } from "components/graphics/SceneRuntime";
import { useRef } from "react";
import * as THREE from "three";

import { useSpring } from "@react-spring/three";

interface FunctionPlaneProps {
  run: boolean;
  loop?: boolean;
  tension?: number;
  f: (x: number, y: number, anim: number) => number;
}

function FunctionPlane({ run, loop, tension, f }: FunctionPlaneProps) {
  const previous = useRef<{ value: number; f: typeof f } | null>(null);
  const plane = useRef<THREE.PlaneGeometry>(null);

  const running = useSceneRunning();
  const { anim } = useSpring({
    pause: Boolean(loop) && !running,
    config: {
      tension,
    },
    from: {
      anim: 0,
    },
    to: async (next) => {
      if (loop) {
        let active = true;
        while (active) {
          active = !(await next({ anim: 0 })).cancelled;
          if (!active) return;
          if ((await next({ anim: 1 })).cancelled) return;
        }
      } else {
        await next({ anim: run ? 1 : 0 });
      }
    },
  });

  useSceneFrame(() => {
    const geometry = plane.current;
    if (!geometry) return;
    const value = anim.get();
    if (previous.current?.value === value && previous.current.f === f) return;
    previous.current = { value, f };
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      position.setZ(i, f(position.getX(i), position.getY(i), value));
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
  });

  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -2.9, 0]}>
      <planeGeometry ref={plane} args={[9, 9, 30, 30]} />
      <meshLambertMaterial color="#ced4da" side={THREE.DoubleSide} />
    </mesh>
  );
}

export default FunctionPlane;
