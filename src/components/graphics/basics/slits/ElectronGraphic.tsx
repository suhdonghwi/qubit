import { animated, useSpring } from "@react-spring/three";
import { Text } from "@react-three/drei";

import Plane from "../../Plane";

export default function ElectronGraphic() {
  const electronSpring = useSpring<{ position: any }>({
    from: { position: [0, -0.3, 0] },
    to: async (next) => {
      while (1) {
        await next({ position: [0, -0.7, 0] });
        await next({ position: [0, -0.2, 0] });
      }
    },
  });

  return (
    <>
      <Text
        color="white"
        fontSize={1}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        position={[0, 3, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Electron!
      </Text>

      <animated.mesh castShadow {...electronSpring}>
        <sphereBufferGeometry args={[0.2, 64, 64]} />
        <meshLambertMaterial color="#228be6" />
      </animated.mesh>

      <Plane />
    </>
  );
}
