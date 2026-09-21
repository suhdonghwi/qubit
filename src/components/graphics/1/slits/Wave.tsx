import { useSceneFrame } from "components/graphics/SceneRuntime";
import { useRef } from "react";
import * as THREE from "three";

import {  ThreeElements } from "@react-three/fiber";

interface WaveProps {
  xOffset: number;
  yOffset: number;

  frequency: number;
  amplitude: number;

  width: number;
  height: number;

  lod?: number;
}

export default function Wave({
  xOffset,
  yOffset,
  frequency,
  amplitude,
  width,
  height,
  lod,
  ...props
}: WaveProps & ThreeElements["mesh"]) {
  const plane = useRef<THREE.PlaneGeometry>(null);

  function f(x: number, y: number, anim: number) {
    const z =
      amplitude *
        Math.sin(
          Math.sqrt((x - xOffset) ** 2 + (y + yOffset) ** 2) * frequency - anim
        ) +
      amplitude *
        Math.sin(
          Math.sqrt((x + xOffset) ** 2 + (y + yOffset) ** 2) * frequency - anim
        );

    return z;
  }

  useSceneFrame(({ clock }) => {
    const geometry = plane.current;
    if (!geometry) return;
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      position.setZ(i, f(position.getX(i), position.getY(i), clock.elapsedTime * 10));
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
  });

  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} {...props}>
      <planeGeometry ref={plane} args={[width, height, lod ?? 16, lod ?? 16]} />
      <meshLambertMaterial color="#ced4da" side={THREE.DoubleSide} />
    </mesh>
  );
}
