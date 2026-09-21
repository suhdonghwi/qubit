import { useLayoutEffect, useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import { Group, InstancedMesh, Object3D, Matrix4 } from "three";
import { useSceneFrame } from "../SceneRuntime";

const corners = [[-0.4, -0.4], [0.4, -0.4], [-0.4, 0.4], [0.4, 0.4]];
const patterns = [
  [[0, 0]],
  [[-0.4, -0.4], [0.4, 0.4]],
  [[-0.4, -0.4], [0, 0], [0.4, 0.4]],
  corners,
  [...corners, [0, 0]],
  [...corners, [-0.4, 0], [0.4, 0]],
];
const faces: [number, number, number][] = [
  [0, 0, 0], [0, Math.PI / 2, 0], [-Math.PI / 2, 0, 0],
  [Math.PI / 2, 0, 0], [0, -Math.PI / 2, 0], [0, Math.PI, 0],
];

function Pips() {
  const mesh = useRef<InstancedMesh>(null);
  useLayoutEffect(() => {
    if (!mesh.current) return;
    const face = new Object3D();
    const pip = new Object3D();
    const matrix = new Matrix4();
    let index = 0;
    patterns.forEach((pattern, faceIndex) => {
      face.rotation.set(...faces[faceIndex]);
      face.updateMatrix();
      pattern.forEach(([x, y]) => {
        pip.position.set(x, y, 0.751);
        pip.updateMatrix();
        mesh.current!.setMatrixAt(index++, matrix.multiplyMatrices(face.matrix, pip.matrix));
      });
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.computeBoundingSphere();
  }, []);
  return <instancedMesh ref={mesh} args={[undefined, undefined, 21]}>
    <circleGeometry args={[0.105, 16]} />
    <meshStandardMaterial color="#16181a" roughness={0.65} />
  </instancedMesh>;
}

/** Procedural rounded dice: two draw calls and no multi-megabyte model download. */
export default function DiceModel({ xDelta, yDelta, ...props }: ThreeElements["group"] & { xDelta: number; yDelta: number }) {
  const group = useRef<Group>(null);
  useSceneFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.x += xDelta * 60 * delta;
    group.current.rotation.y += yDelta * 60 * delta;
  });
  return <group {...props}>
    <group ref={group} rotation={[2.5, -0.81, -0.84]}>
      <RoundedBox args={[1.5, 1.5, 1.5]} radius={0.12} smoothness={3} castShadow receiveShadow>
        <meshStandardMaterial color="#f1f3f5" roughness={0.32} />
      </RoundedBox>
      <Pips />
    </group>
  </group>;
}
