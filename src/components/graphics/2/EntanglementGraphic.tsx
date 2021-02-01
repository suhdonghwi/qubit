import { useState } from "react";

import { animated } from "@react-spring/three";

import Plane from "../Plane";
import Qubit from "../Qubit";
import Button from "../Button";

export default function EntanglementGraphic() {
  const [clicked, setClicked] = useState(false);
  const probability1 = clicked ? Math.round(Math.random()) : 0.5;
  const probability2 = probability1 === 1 ? 0 : probability1 === 0 ? 1 : 0.5;

  return (
    <>
      <mesh position={[-4, -0.5, -1.5]} rotation={[0, 0, 0]} castShadow>
        <boxBufferGeometry args={[0.7, 0.5, 0.5]} />
        <meshLambertMaterial color="#495057" />
      </mesh>
      <mesh position={[-2, -0.5, -1.5]} rotation={[0, 0, -Math.PI / 2]}>
        <cylinderBufferGeometry args={[0.45, 0.1, 4, 32]} />
        <animated.meshLambertMaterial
          color="#ffd43b"
          transparent
          opacity={clicked ? 0.3 : 0}
        />
      </mesh>
      <Button
        position={[0, -2.75, 3]}
        onDown={() => setClicked(true)}
        onUp={() => setClicked(false)}
        click={clicked}
      />
      <Qubit
        oneProbability={probability1}
        position={[0, -0.5, -1.5]}
        size={0.5}
      />
      <Qubit
        oneProbability={probability2}
        position={[0, -0.5, 1.5]}
        size={0.5}
      />
      <Plane />;
    </>
  );
}
