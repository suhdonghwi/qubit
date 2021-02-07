import { animated, useSpring } from "@react-spring/three";

import Plane from "../Plane";
import Bit from "../Bit";
import Qubit from "../Qubit";

const AnimatedBit = animated(Bit);
const AnimatedQubit = animated(Qubit);

export default function RaceGraphic() {
  const { bitPosition } = useSpring({
    config: {
      tension: 100,
    },
    from: {
      bitPosition: [-3, -2, -2] as any,
    },
    to: async (next) => {
      while (1) {
        await next({ bitPosition: [3, -2, -2] });
        await next({ bitPosition: [-3, -2, -2] });
      }
    },
  });

  const { qubitPosition } = useSpring({
    from: {
      qubitPosition: [-3, -2, 2] as any,
    },
    to: async (next) => {
      while (1) {
        await next({ qubitPosition: [3, -2, 2] });
        await next({ qubitPosition: [-3, -2, 2] });
      }
    },
  });

  return (
    <>
      <AnimatedBit radius={0.5} one={false} position={bitPosition} />
      <AnimatedQubit
        radius={0.5}
        oneProbability={0.5}
        position={qubitPosition}
      />
      <Plane />
    </>
  );
}
