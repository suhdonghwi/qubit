import { Text } from "@react-three/drei";

import Plane from "../../Plane";
import FloatingElectron from "../../FloatingElectron";

export default function ElectronGraphic() {
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

      <FloatingElectron />
      <Plane />
    </>
  );
}
