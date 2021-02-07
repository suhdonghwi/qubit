import { useSpring, animated } from "@react-spring/three";
import { Text } from "@react-three/drei";

import Plane from "../Plane";
import Qubit from "../Qubit";
import fonts from "fonts.json";

const AnimatedQubit = animated(Qubit);

export default function QubitGraphic() {
  const { prob } = useSpring({
    from: {
      prob: 0.5,
    },
    to: async (next) => {
      while (1) {
        await next({ prob: 0.3 });
        await next({ prob: 0.7 });
      }
    },
  });

  return (
    <>
      <Text
        fontSize={1}
        font={fonts.raleway}
        position={[0, 3, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Qubit
      </Text>

      <AnimatedQubit oneProbability={prob} radius={1.5} />

      <Plane />
    </>
  );
}
