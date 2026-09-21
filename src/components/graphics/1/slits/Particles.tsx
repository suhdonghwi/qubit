import { useLayoutEffect, useRef } from "react";
import { InstancedMesh, Object3D } from "three";
import { useSceneFrame } from "../../SceneRuntime";
import { seededRandom } from "../../../../utils/random";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  passed: boolean;
  stopped: boolean;
};

function reset(random: () => number): Particle {
  const yaw = random() - 0.5;
  const pitch = random() * 0.4 - 0.2;
  return {
    x: 0,
    y: -1,
    z: 5,
    vx: -Math.sin(yaw) * Math.cos(pitch) * 6,
    vy: Math.sin(pitch) * 6,
    vz: -Math.cos(yaw) * Math.cos(pitch) * 6,
    passed: false,
    stopped: false,
  };
}

export default function Particles({ move }: { move: boolean }) {
  const mesh = useRef<InstancedMesh>(null);
  const simulation = useRef<{
    particles: Particle[];
    random: () => number;
    point: Object3D;
  } | null>(null);
  useLayoutEffect(() => {
    const random = seededRandom(2021);
    const particles = Array.from({ length: 100 }, () => reset(random));
    const point = new Object3D();
    simulation.current = { particles, random, point };
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      point.position.set(particle.x, particle.y, particle.z);
      point.updateMatrix();
      mesh.current!.setMatrixAt(i, point.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  }, []);

  useSceneFrame((_, delta) => {
    if (!move || !simulation.current || !mesh.current) return;
    const { particles, random, point } = simulation.current;
    particles.forEach((particle, i) => {
      if (particle.stopped) return;
      particle.x += particle.vx * delta;
      particle.y += particle.vy * delta;
      particle.z += particle.vz * delta;
      if (!particle.passed && particle.z < 0.6) {
        const throughSlit =
          Math.abs(particle.x) > 0.7 && Math.abs(particle.x) < 1.2;
        if (!throughSlit) {
          particle.vx = (random() - 0.5) * 4;
          particle.vy = (random() - 0.5) * 3;
          particle.vz = Math.abs(particle.vz);
        }
        particle.passed = true;
      } else if (particle.z < -4.1) {
        particle.z = -4.1;
        particle.stopped = true;
      } else if (particle.z > 5) {
        Object.assign(particle, reset(random));
      }
      point.position.set(particle.x, particle.y, particle.z);
      point.updateMatrix();
      mesh.current!.setMatrixAt(i, point.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[undefined, undefined, 100]}
      castShadow
      frustumCulled={false}
    >
      <sphereGeometry args={[0.1, 12, 8]} />
      <meshStandardMaterial color="#fa5252" roughness={0.5} />
    </instancedMesh>
  );
}
