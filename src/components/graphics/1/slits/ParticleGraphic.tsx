import Particles from "./Particles";
import { useState } from "react";

import * as THREE from "three";

import { useSpring } from "@react-spring/three";

import Plane from "../../Plane";
import Button from "../../Button";

import ProjectionScreen from "./ProjectionScreen";
import DoubleSlits from "./DoubleSlits";
import ProbCurve from "./ProbCurve";
import { GraphicContentProps } from "../../../../types/Scene";

export default function ParticleGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const [clicked, setClicked] = useState(false);

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
      <Particles move={clicked} />

      <Plane />
    </>
  );
}
