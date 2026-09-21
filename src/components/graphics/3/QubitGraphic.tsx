import { useSceneRunning } from "components/graphics/SceneRuntime";
import { useSpring, animated } from "@react-spring/three";
import { Text } from "@react-three/drei";

import Plane from "../Plane";
import Qubit from "../Qubit";
import fonts from "fonts";

const AnimatedQubit = animated(Qubit);

export default function QubitGraphic() {
  const running = useSceneRunning();
  const { prob } = useSpring({
    pause: !running,
    from: {
      prob: 0.5,
    },
    to: async (next) => {
      let active = true;
      while (active) {
        active = !(await next({ prob: 0.3 })).cancelled;
        if (!active) return;
        if ((await next({ prob: 0.7 })).cancelled) return;
      }
    },
  });

  return (
    <>
      <Text
        fontSize={1}
        font={fonts.pretendard}
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
