import { useState } from "react";

import { animated, useSpring } from "@react-spring/three";

import Plane from "../Plane";
import WobblySphere from "../WobblySphere";
import Button from "../Button";
import { GraphicContentProps } from "types/Scene";

const AnimatedButton = animated(Button);

export default function EntanglementGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const [clicked, setClicked] = useState(false);
  const probability1 = clicked ? Math.round(Math.random()) : 0.5;
  const probability2 = probability1 === 1 ? 0 : probability1 === 0 ? 1 : 0.5;

  const buttonSpring = useSpring<{ position: any }>({
    position: paragraphIndex > 0 ? [0, -2.75, 3] : [0, -3.5, 3],
  });

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
      <AnimatedButton
        onDown={() => setClicked(true)}
        onUp={() => setClicked(false)}
        click={clicked}
        {...buttonSpring}
      />
      <WobblySphere
        oneProbability={probability1}
        position={[0, -0.5, -1.5]}
        size={0.5}
      />
      <WobblySphere
        oneProbability={probability2}
        position={[0, -0.5, 1.5]}
        size={0.5}
      />
      <Plane />;
    </>
  );
}
