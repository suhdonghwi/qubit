import * as THREE from "three";

import Plane from "../Plane";

export default function DoubleSlitsGraphic() {
  const xMin = -5,
    xMax = 5;
  const yMin = -5,
    yMax = 5;

  const xRange = xMax - xMin,
    yRange = yMax - yMin;

  function f(x: number, y: number, target: THREE.Vector3) {
    x = xRange * x + xMin;
    y = yRange * y + yMin;
    const z =
      0.45 * Math.sin(Math.sqrt(x ** 2 + y ** 2) * 2.67) +
      0.45 * Math.sin(Math.sqrt(x ** 2 + y ** 2) * 2.67);

    target.set(x, y, -z);
  }

  const plane = new THREE.ParametricGeometry(f, 50, 50);

  for (const face of plane.faces) {
    console.log(face);
    for (let i = 0; i < 3; i++) {
      face.vertexColors[i] = new THREE.Color("red");
    }
  }

  return (
    <>
      <mesh
        geometry={plane}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshLambertMaterial
          attach="material"
          color="white"
          side={THREE.DoubleSide}
        />
      </mesh>

      <Plane />
    </>
  );
}
