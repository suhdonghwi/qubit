import { useSpring, animated } from "@react-spring/three";
import { Text } from "@react-three/drei";

import Plane from "../Plane";
import Qubit from "../Qubit";
import fonts from "fonts.json";

const AnimatedQubit = animated(Qubit);

export default function BitCountGraphic() {
  const { prob1, prob2, prob3 } = useSpring({
    from: {
      prob1: 0.5,
      prob2: 0.5,
      prob3: 0.5,
    },
    to: async (next) => {
      while (1) {
        await next({
          prob1: Math.random(),
          prob2: Math.random(),
          prob3: Math.random(),
        });
      }
    },
  });

  return (
    <>
      <Text
        fontSize={1}
        font={fonts.raleway}
        position={[0, 2, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        0 ~ 7 at once!
      </Text>

      <group position={[0, -0.5, 0]}>
        {[prob1, prob2, prob3].map((p, i) => (
          <AnimatedQubit
            key={i}
            oneProbability={p}
            radius={0.6}
            position={[-1.2 + 1.2 * i, 0, -1.2 + 1.2 * i]}
          />
        ))}
      </group>

      <Plane />
    </>
  );
}
