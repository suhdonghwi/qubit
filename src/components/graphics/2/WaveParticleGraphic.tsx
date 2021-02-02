import { Text } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

import Plane from "../Plane";
import FloatingElectron from "../FloatingElectron";
import { GraphicContentProps } from "types/Scene";
import fonts from "fonts.json";

export default function WaveParticleGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  const groupSpring = useSpring<{ rotation: any; position: any }>({
    rotation: paragraphIndex > 0 ? [Math.PI, 0, 0] : [0, 0, 0],
    position: paragraphIndex > 0 ? [0, -6, 0] : [0, 0, 0],
  });

  const soWhatSpring = useSpring<{ position: any }>({
    position: paragraphIndex > 0 ? [0, -7, 0] : [0, -4, 0],
  });

  const AnimatedText = animated(Text);

  return (
    <animated.group {...groupSpring}>
      <Text
        color="white"
        fontSize={1}
        font={fonts.raleway}
        position={[-0.4, 1.5, -2]}
        rotation={[0, 0, 0]}
      >
        Wave!
      </Text>

      <Text
        color="white"
        fontSize={1}
        font={fonts.raleway}
        position={[1.5, 1.5, 0.7]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        Particle!
      </Text>

      <AnimatedText
        color="white"
        fontSize={1}
        font={fonts.raleway}
        rotation={[Math.PI, 0, 0]}
        {...soWhatSpring}
      >
        ...So What?
      </AnimatedText>

      <FloatingElectron />
      <Plane />
    </animated.group>
  );
}
