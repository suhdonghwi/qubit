import { measure } from "../../../domain/quantum";
import { useState } from "react";

import { animated } from "@react-spring/three";

import Plane from "../Plane";
import WobblySphere from "../WobblySphere";
import Button from "../Button";

export default function SuperpositionGraphic() {
  const [outcome, setOutcome] = useState<0 | 1 | null>(null);
  const clicked = outcome !== null;
  const probability = outcome ?? 0.5;

  return (
    <>
      <mesh position={[-4, -0.5, 0]} rotation={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.7, 0.5, 0.5]} />
        <meshLambertMaterial color="#495057" />
      </mesh>
      <mesh position={[-2, -0.5, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderGeometry args={[0.45, 0.1, 4, 32]} />
        <animated.meshLambertMaterial
          color="#ffd43b"
          transparent
          opacity={clicked ? 0.3 : 0}
        />
      </mesh>
      <Button
        position={[0, -2.75, 2]}
        onDown={() => setOutcome(measure(0.5, Math.random()))}
        onUp={() => setOutcome(null)}
        click={clicked}
      />
      <WobblySphere oneProbability={probability} position={[0, -0.5, 0]} size={0.5} />
      <Plane />
    </>
  );
}
