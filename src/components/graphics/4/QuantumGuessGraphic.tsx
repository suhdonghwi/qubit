import { positionProps } from "utils/AnimatedVector";
import { useState } from "react";
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
    buttonPosition: [-3, paragraphIndex > 0 ? -2.75 : -3.5, 3] as [
      number,
      number,
      number,
    ],
  });

  const props = useSpring({
    from: {
      inputDepth: 0,
      bitsPosition: [-1.1, 2, 0] as [number, number, number],
      boxOpacity: 1,
      lightOpacity: 0,
      prob1: 0.5,
      prob2: 0.5,
      prob3: 0.5,
      outputOpacity: 0,
    },
    to: async (next) => {
      if (!pressed) return;
      if ((await next({ inputDepth: 1, config: { duration: 500 } })).cancelled)
        return;
      if (
        (
          await next({
            bitsPosition: [-1.1, -2, 0],
            config: { duration: 1000 },
            delay: 500,
          })
        ).cancelled
      )
        return;
      if ((await next({ boxOpacity: 0.5 })).cancelled) return;
      if (
        (
          await next({
            lightOpacity: 0.5,
            prob1: 1,
            prob2: 1,
            prob3: 0,
            delay: 300,
          })
        ).cancelled
      )
        return;
      await next({ outputOpacity: 1, delay: 700 });
    },
  });

  return (
    <>
      <AnimatedBox
        boxOpacity={props.boxOpacity}
        inputDepth={props.inputDepth}
        lightOpacity={props.lightOpacity}
        outputOpacity={props.outputOpacity}
        correct={false}
      />

      <animated.group {...positionProps(props.bitsPosition)}>
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
        {...positionProps(buttonPosition)}
      />

      <Plane />
    </>
  );
}
