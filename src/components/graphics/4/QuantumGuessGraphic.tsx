import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";

import Plane from "../Plane";
import Qubit from "../Qubit";
import Button from "../Button";

import GuessBox from "./GuessBox";
import { GraphicContentProps } from "types/Scene";

const AnimatedBox = animated(GuessBox);
const AnimatedQubit = animated(Qubit);
const AnimatedButton = animated(Button);

export default function QuantumGuessGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const [pressed, setPressed] = useState(false);

  const { buttonPosition } = useSpring({
    buttonPosition: [-3, paragraphIndex > 0 ? -2.75 : -3.5, 3] as any,
  });

  const [props, set] = useSpring(() => ({
    inputScale: [1, 1, 0] as any,
    bitsPosition: [-1.1, 2, 0] as any,
    boxOpacity: 1,
    lightOpacity: 0,
    prob1: 0.5,
    prob2: 0.5,
    prob3: 0.5,
    outputOpacity: 0,
  }));

  useEffect(() => {
    async function animate() {
      await set({ inputScale: [1, 1, 1], config: { duration: 500 } });
      await set({
        bitsPosition: [-1.1, -2, 0],
        config: { duration: 1000 },
        delay: 500,
      });
      await set({ boxOpacity: 0.5 });
      await set({
        lightOpacity: 0.5,
        prob1: 1,
        prob2: 1,
        prob3: 0,
        delay: 300,
      });
      await set({ outputOpacity: 1, delay: 700 });
    }

    if (pressed) {
      animate();
    }
  }, [pressed, set]);

  return (
    <>
      <AnimatedBox
        boxOpacity={props.boxOpacity}
        inputScale={props.inputScale}
        lightOpacity={props.lightOpacity}
        outputOpacity={props.outputOpacity}
        correct={false}
      />

      <animated.group position={props.bitsPosition}>
        {[props.prob1, props.prob2, props.prob3].map((p, i) => (
          <AnimatedQubit
            key={i}
            oneProbability={p}
            radius={0.3}
            position={[0, 0, i - 1]}
            castShadow={false}
          />
        ))}
      </animated.group>

      <AnimatedButton
        click={pressed}
        onClick={() => setPressed(true)}
        position={buttonPosition}
      />

      <Plane />
    </>
  );
}
