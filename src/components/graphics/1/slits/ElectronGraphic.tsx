import { Text } from "@react-three/drei";

import Plane from "../../Plane";
import FloatingElectron from "../../FloatingElectron";
import fonts from "fonts.json";

export default function ElectronGraphic() {
  return (
    <>
      <Text
        color="white"
        fontSize={1}
        font={fonts.raleway}
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
