import { Text } from "@react-three/drei";

import Plane from "../Plane";
import FloatingElectron from "../FloatingElectron";

export default function WaveParticleGraphic() {
  return (
    <>
      <Text
        color="white"
        fontSize={1}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        position={[-0.4, 1.5, -2]}
        rotation={[0, 0, 0]}
      >
        Wave!
      </Text>

      <Text
        color="white"
        fontSize={1}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        position={[1.5, 1.5, 0.7]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        Particle!
      </Text>

      <FloatingElectron />
      <Plane />
    </>
  );
}
