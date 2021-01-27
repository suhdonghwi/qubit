import { useState, useEffect, useRef } from "react";

import * as THREE from "three";
import { useFrame } from "react-three-fiber";

import Plane from "../../Plane";
import Button from "../../Button";
import ProjectionScreen from "./ProjectionScreen";

interface WaveProps {
  xOffset: number;
  yOffset: number;

  frequency: number;
  amplitude: number;
}

export function Wave({ xOffset, yOffset, frequency, amplitude }: WaveProps) {
  const plane = new THREE.PlaneGeometry(8, 8, 40, 40);

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

  useFrame(() => {
    const a = performance.now() * 0.01;
    plane.vertices.forEach((v) => {
      v.z = f(v.x, v.y, a);
    });

    plane.computeVertexNormals();

    plane.verticesNeedUpdate = true;
  });

  return (
    <>
      <mesh
        geometry={plane}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshLambertMaterial color="white" side={THREE.DoubleSide} />
      </mesh>

      <Plane />
    </>
  );
}

function Particle({ move }: { move: boolean }) {
  const meshRef = useRef<THREE.Mesh>();
  const [passed, setPassed] = useState(false);
  const [speed, setSpeed] = useState(0.1);

  function reset() {
    meshRef.current?.position.set(0, -1, 5);
    meshRef.current?.rotation.set(0, 0, 0);

    meshRef.current?.rotateY(Math.random() - 0.5);
    meshRef.current?.rotateX(Math.random() * 0.4 - 0.2);

    setPassed(false);
  }

  useEffect(() => {
    reset();
  }, []);

  useFrame(() => {
    if (!move || meshRef.current === undefined) return;
    meshRef.current.translateZ(-speed);

    if (!passed && meshRef.current.position.z < 0.6) {
      if (
        !(
          (meshRef.current.position.x < -0.7 &&
            meshRef.current.position.x > -1.2) ||
          (meshRef.current.position.x > 0.7 && meshRef.current.position.x < 1.2)
        )
      ) {
        meshRef.current.rotateY(Math.PI + (Math.random() * 0.6 - 0.3));
        meshRef.current.rotateX(Math.random() - 0.5);
      }

      setPassed(true);
    } else if (meshRef.current.position.z < -4.1) {
      setSpeed(0);
    } else if (meshRef.current.position.z > 5) {
      reset();
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <sphereBufferGeometry args={[0.1, 64, 64]} />
      <meshLambertMaterial color="#fa5252" />
    </mesh>
  );
}

export default function SlitsParticleGraphic() {
  const [clicked, setClicked] = useState(false);

  const particles = Array(100)
    .fill(null)
    .map((_) => <Particle move={clicked} />);

  function onDown() {
    setClicked(true);
  }

  return (
    <>
      <ProjectionScreen />

      <mesh position={[-2.8, -1.4, 0.5]} castShadow>
        <boxBufferGeometry args={[3.3, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[2.8, -1.4, 0.5]} castShadow>
        <boxBufferGeometry args={[3.3, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[0, -1.4, 0.5]} castShadow>
        <boxBufferGeometry args={[1.5, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[0, -1, 5]}>
        <boxBufferGeometry args={[1.0, 0.6, 0.5]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <Button onDown={onDown} click={clicked} position={[-2.5, -2.75, 2.3]} />
      {particles}

      <Plane />
    </>
  );
}
