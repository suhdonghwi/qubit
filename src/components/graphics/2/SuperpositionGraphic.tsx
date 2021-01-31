import { Text } from "@react-three/drei";

import Plane from "../Plane";
import Qubit from "../Qubit";

export default function SuperpositionGraphic() {
  return (
    <>
      <Text
        color="white"
        fontSize={1}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        position={[0, 3, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Superposition!
      </Text>
      <Qubit oneProbability={0.5} position={[0, -0.5, 0]} size={1} />
      <Plane />;
    </>
  );
}
