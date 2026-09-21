import { useSceneFrame } from "components/graphics/SceneRuntime";
import { useState, useEffect, useRef } from "react";

import * as THREE from "three";

import { useSpring } from "@react-spring/three";

import Plane from "../../Plane";
import Button from "../../Button";

import ProjectionScreen from "./ProjectionScreen";
import DoubleSlits from "./DoubleSlits";
import ProbCurve from "./ProbCurve";
import { GraphicContentProps } from "../../../../types/Scene";

function Particle({ move }: { move: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
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

  useSceneFrame((_, delta) => {
    if (!move || meshRef.current == null) return;
    meshRef.current.translateZ(-speed * 60 * Math.min(delta, 0.05));

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
      <sphereGeometry args={[0.1, 64, 64]} />
      <meshLambertMaterial color="#fa5252" />
    </mesh>
  );
}

export default function ParticleGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const [clicked, setClicked] = useState(false);

  const particles = Array(100)
    .fill(null)
    .map((_, i) => <Particle key={i} move={clicked} />);

  const curveSpring = useSpring({
    opacity: paragraphIndex > 0 ? 1 : 0,
  });

  function onDown() {
    setClicked(true);
  }

  return (
    <>
      <ProjectionScreen />
      <DoubleSlits position={[0, -1.4, 0.5]} />

      <ProbCurve
        points={[
          new THREE.Vector3(-4, -3.2, -4.25),
          new THREE.Vector3(-3, -3, -4.25),
          new THREE.Vector3(-2, 0.5, -4.25),
          new THREE.Vector3(-1, -3, -4.25),
          new THREE.Vector3(1, -3, -4.25),
          new THREE.Vector3(2, 0.5, -4.25),
          new THREE.Vector3(3, -3, -4.25),
          new THREE.Vector3(4, -3.2, -4.25),
        ]}
        color="#1864ab"
        {...curveSpring}
      />

      <mesh position={[0, -1, 5]}>
        <boxGeometry args={[1.0, 0.6, 0.5]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <Button onDown={onDown} click={clicked} position={[-2.5, -2.75, 2.3]} />
      {particles}

      <Plane />
    </>
  );
}
