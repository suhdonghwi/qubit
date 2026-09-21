import { useLayoutEffect, useRef } from "react";
import { InstancedMesh, Object3D } from "three";
import { seededRandom } from "../../../../utils/random";

export default function ImpactPattern({ observed }: { observed: boolean }) {
  const mesh = useRef<InstancedMesh>(null);
  const count = observed ? 100 : 99;
  useLayoutEffect(() => {
    if (!mesh.current) return;
    const random = seededRandom(42);
    const point = new Object3D();
    for (let i = 0; i < count; i++) {
      const row = Math.floor(i / (observed ? 2 : 3));
      const band = i % (observed ? 2 : 3);
      const x = observed ? (band === 0 ? -2.5 + random() : 2.5 - random())
        : band === 0 ? -3.8 + random() : band === 1 ? 3.7 - random() : -0.6 + random();
      const y = observed ? -row * 0.075 + 1.2 : band === 2 ? -row * 0.12 + 1.2 : -row * 0.08;
      point.position.set(x, y, -4);
      point.updateMatrix();
      mesh.current.setMatrixAt(i, point.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.computeBoundingSphere();
  }, [observed, count]);
  return <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
    <sphereGeometry args={[0.08, 8, 6]} />
    <meshStandardMaterial color="#228be6" roughness={0.55} />
  </instancedMesh>;
}
