import { useSceneFrame } from "components/graphics/SceneRuntime";
import { useRef } from "react";
import { ThreeElements } from "@react-three/fiber";
import { createNoise3D } from "simplex-noise";
import * as THREE from "three";

import { animated, useSpring } from "@react-spring/three";

interface QubitProps {
  oneProbability: number;
  size: number;
}

const noise = createNoise3D(() => 0.5);
const blue = new THREE.Color("#339af0");
const pink = new THREE.Color("#f06595");

export default function WobblySphere({
  oneProbability,
  size,
  ...props
}: QubitProps & ThreeElements["mesh"]) {
  const unstability = -2 * Math.abs(oneProbability - 0.5) + 1;
  const { factor } = useSpring({
    factor: unstability * 0.15,
  });

  const sphereSpring = useSpring({
    config: {
      tension: 100,
    },
    color: blue.clone().lerp(pink, oneProbability).getStyle(),
  });

  const geometry = useRef<THREE.SphereGeometry>(null);

  useSceneFrame(({ clock }) => {
    const sphere = geometry.current;
    if (!sphere) return;
    const position = sphere.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i), y = position.getY(i), z = position.getZ(i);
      const length = Math.hypot(x, y, z);
      const nx = x / length, ny = y / length, nz = z / length;
      const radius = size + factor.get() * noise(nx + clock.elapsedTime, ny, nz);
      position.setXYZ(i, nx * radius, ny * radius, nz * radius);
    }
    position.needsUpdate = true;
    sphere.computeVertexNormals();
    sphere.computeBoundingSphere();
  });

  return (
    <>
      <mesh {...props} castShadow>
        <sphereGeometry ref={geometry} args={[1, 24, 16]} />
        <animated.meshLambertMaterial {...sphereSpring} />
      </mesh>
    </>
  );
}
