import { useState } from "react";

import { animated } from "@react-spring/three";

import Plane from "../Plane";
import WobblySphere from "../WobblySphere";
import Button from "../Button";

export default function SuperpositionGraphic() {
  const [clicked, setClicked] = useState(false);
  const probability = clicked ? Math.round(Math.random()) : 0.5;

  return (
    <>
      <mesh position={[-4, -0.5, 0]} rotation={[0, 0, 0]} castShadow>
        <boxBufferGeometry args={[0.7, 0.5, 0.5]} />
        <meshLambertMaterial color="#495057" />
      </mesh>
      <mesh position={[-2, -0.5, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderBufferGeometry args={[0.45, 0.1, 4, 32]} />
        <animated.meshLambertMaterial
          color="#ffd43b"
          transparent
          opacity={clicked ? 0.3 : 0}
        />
      </mesh>
      <Button
        position={[0, -2.75, 2]}
        onDown={() => setClicked(true)}
        onUp={() => setClicked(false)}
        click={clicked}
      />
      <WobblySphere oneProbability={probability} position={[0, -0.5, 0]} size={0.5} />
      <Plane />;
    </>
  );
}
