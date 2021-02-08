import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";

import BlochSphere from "../BlochSphere";
import Plane from "../Plane";
import Button from "../Button";
import QuantumSingleGate from "./SingleQuantumGate";

const AnimatedSphere = animated(BlochSphere);

interface QuantumGraphicProps {
  inputPhi: number;
  inputTheta: number;
  outputPhi: number;
  outputTheta: number;

  controlPhi?: number;
  controlTheta?: number;

  name: string;
}

export default function QuantumGraphic({
  inputPhi,
  inputTheta,
  outputPhi,
  outputTheta,
  controlPhi,
  controlTheta,
  name,
}: QuantumGraphicProps) {
  const [pressed, setPressed] = useState(false);

  const [sphereSpring, set] = useSpring(() => ({
    position: [0, 0, -4] as any,
    phi: inputPhi,
    theta: inputTheta,
  }));

  useEffect(() => {
    async function animate() {
      await set({ position: [0, 0, 0] });
      await set({ phi: outputPhi, theta: outputTheta });
      await set({ position: [0, 0, 4] });
    }

    if (pressed) {
      animate();
    }
  }, [pressed, outputPhi, outputTheta, set]);

  return (
    <>
      <QuantumSingleGate name={name} radius={2} />
      <AnimatedSphere radius={1} {...sphereSpring} />

      {controlPhi !== undefined && controlTheta !== undefined && (
        <>
          <BlochSphere
            radius={1}
            phi={controlPhi}
            theta={controlTheta}
            position={[6, 0, 0]}
          />
          <mesh rotation={[0, 0, Math.PI / 2]} position={[3, 0, 0]}>
            <cylinderBufferGeometry args={[0.15, 0.05, 2, 32]} />
            <meshBasicMaterial color="#845ef7" />
          </mesh>
        </>
      )}

      <Button
        click={pressed}
        onClick={() => setPressed(true)}
        position={[-2.5, -2.7, 2.5]}
      />
      <Plane />
    </>
  );
}
