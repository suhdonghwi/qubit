import { useSceneRunning } from "components/graphics/SceneRuntime";
import { positionProps } from "utils/AnimatedVector";
import { animated, useSpring } from "@react-spring/three";

import Plane from "../Plane";
import Bit from "../Bit";
import Qubit from "../Qubit";

const AnimatedBit = animated(Bit);
const AnimatedQubit = animated(Qubit);

export default function RaceGraphic() {
  const running = useSceneRunning();
  const { bitPosition } = useSpring({
    pause: !running,
    config: {
      tension: 100,
    },
    from: {
      bitPosition: [-3, -2, -2] as [number, number, number],
    },
    to: async (next) => {
      let active = true;
      while (active) {
        active = !(await next({ bitPosition: [3, -2, -2] })).cancelled;
        if (!active) return;
        if ((await next({ bitPosition: [-3, -2, -2] })).cancelled) return;
      }
    },
  });

  const { qubitPosition } = useSpring({
    pause: !running,
    from: {
      qubitPosition: [-3, -2, 2] as [number, number, number],
    },
    to: async (next) => {
      let active = true;
      while (active) {
        active = !(await next({ qubitPosition: [3, -2, 2] })).cancelled;
        if (!active) return;
        if ((await next({ qubitPosition: [-3, -2, 2] })).cancelled) return;
      }
    },
  });

  return (
    <>
      <AnimatedBit radius={0.5} one={false} {...positionProps(bitPosition)} />
      <AnimatedQubit
        radius={0.5}
        oneProbability={0.5}
        {...positionProps(qubitPosition)}
      />
      <Plane />
    </>
  );
}
