import * as THREE from "three";
import { useFrame } from "react-three-fiber";

import { animated, useSpring } from "@react-spring/three";
import { GraphicContentProps } from "types/Scene";

import Plane from "../Plane";

function f(x: number, y: number, anim: number) {
  const spread = 1.5 - anim * 1.2,
    amplitude = 5;

  const xOffset = anim * 0.4,
    yOffset = anim * 0.8;

  return (
    -amplitude *
    Math.exp(
      -(
        (Math.pow(x - xOffset, 2) + Math.pow(y - yOffset, 2)) /
        (2 * Math.pow(spread, 2))
      )
    )
  );
}

function FunctionPlane({ run }: { run: boolean }) {
  const plane = new THREE.PlaneGeometry(9, 9, 30, 30);

  const { anim } = useSpring({
    anim: run ? 1 : 0,
  });

  useFrame(() => {
    plane.vertices.forEach((v) => {
      v.z = f(v.x, v.y, anim.get());
    });

    plane.computeVertexNormals();
    plane.verticesNeedUpdate = true;
  });

  return (
    <>
      <mesh
        geometry={plane}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -2.9, 0]}
      >
        <meshLambertMaterial color="#ced4da" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

export default function WaveFunctionGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const AnimatedPlane = animated(FunctionPlane);

  return (
    <>
      <AnimatedPlane run={paragraphIndex > 0} />
      <Plane />
    </>
  );
}
