import { useState } from "react";
import { useSpring, animated } from "@react-spring/three";

import Plane from "../Plane";
import Button from "../Button";
import Bit from "../Bit";

import GuessBox from "./GuessBox";

const AnimatedBox = animated(GuessBox);

interface GuessGraphicProps {
  input: [boolean, boolean, boolean];
  correct: boolean;
}

export default function GuessGraphic({ input, correct }: GuessGraphicProps) {
  const [pressed, setPressed] = useState(false);

  const props = useSpring({
    from: {
      inputScale: [1, 1, 0] as any,
      bitsPosition: [-1.1, 2, 0] as any,
      boxOpacity: 1,
      lightOpacity: 0,
      outputOpacity: 0,
    },
    to: async (next) => {
      if (pressed) {
        await next({ inputScale: [1, 1, 1], config: { duration: 500 } });
        await next({
          bitsPosition: [-1.1, -2, 0],
          config: { duration: 1000 },
          delay: 500,
        });
        await next({ boxOpacity: 0.5 });
        await next({ lightOpacity: 0.5, delay: 300 });
        await next({ outputOpacity: 1, delay: 700 });
      }
    },
  });

  return (
    <>
      <AnimatedBox
        boxOpacity={props.boxOpacity}
        inputScale={props.inputScale}
        lightOpacity={props.lightOpacity}
        outputOpacity={props.outputOpacity}
        correct={correct}
      />

      <animated.group position={props.bitsPosition}>
        {[0, 1, 2].map((n) => (
          <Bit
            key={n}
            one={input[n]}
            radius={0.3}
            position={[0, 0, n - 1]}
            castShadow={false}
          />
        ))}
      </animated.group>

      <Button
        click={pressed}
        onClick={() => setPressed(true)}
        position={[-3, -2.75, 3]}
      />

      <Plane />
    </>
  );
}
