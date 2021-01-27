import { useState } from "react";

import { animated, useSpring } from "@react-spring/three";

import Plane from "../Plane";
import Qubit from "../Qubit";
import Button from "../Button";

export default function SuperpositionGraphic() {
  const [pushed, setPushed] = useState(false);
  const probability = pushed ? Math.round(Math.random()) : 0.5;

  return (
    <>
      <mesh position={[-4, -0.5, 0]} rotation={[0, 0, 0]} castShadow>
        <boxBufferGeometry args={[0.7, 0.5, 0.5]} />
        <meshLambertMaterial color="#868e96" />
      </mesh>
      <mesh position={[-2, -0.5, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderBufferGeometry args={[0.4, 0.1, 4, 32]} />
        <animated.meshLambertMaterial
          color="#ffd43b"
          transparent
          opacity={pushed ? 0.3 : 0}
        />
      </mesh>
      <Button
        position={[0, -2.75, 2]}
        onDown={() => setPushed(true)}
        onUp={() => setPushed(false)}
      />
      <Qubit oneProbability={probability} position={[0, -0.5, 0]} size={0.5} />
      <Plane />;
    </>
  );
}
