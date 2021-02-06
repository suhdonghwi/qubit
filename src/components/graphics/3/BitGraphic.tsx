import { Text } from "@react-three/drei";

import Plane from "../Plane";
import Bit from "../Bit";
import fonts from "fonts.json";

export default function BitGraphic() {
  const binString = ["1", "0", "1"];

  return (
    <>
      <Text
        fontSize={1}
        font={fonts.raleway}
        position={[0, 2, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Bits
      </Text>

      <group position={[0, -0.5, 0]}>
        {binString.map((n, i) => (
          <Bit
            key={i}
            one={n === "1"}
            radius={0.6}
            position={[-1.2 + 1.2 * i, 0, -1.2 + 1.2 * i]}
          />
        ))}
      </group>

      <Plane />
    </>
  );
}
