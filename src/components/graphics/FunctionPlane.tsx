import * as THREE from "three";
import { useFrame } from "react-three-fiber";

import { useSpring } from "@react-spring/three";

function FunctionPlane({
  run,
  f,
}: {
  run: boolean;
  f: (x: number, y: number, anim: number) => number;
}) {
  const plane = new THREE.PlaneGeometry(9, 9, 64, 64);

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
