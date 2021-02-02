import { Text } from "@react-three/drei";

import Plane from "../Plane";
import WobblySphere from "../WobblySphere";
import fonts from "fonts.json";

export default function SuperpositionGraphic() {
  return (
    <>
      <Text
        color="white"
        fontSize={1}
        font={fonts.raleway}
        position={[0, 3, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Superposition!
      </Text>
      <WobblySphere oneProbability={0.5} position={[0, -0.5, 0]} size={1} />
      <Plane />;
    </>
  );
}
