import { Text } from "@react-three/drei";

import Plane from "../Plane";
import SingleGate from "./SingleGate";
import DoubleGate from "./DoubleGate";
import fonts from "fonts.json";

export default function LogicGatesGraphic() {
  const scale: [number, number, number] = [0.7, 0.7, 0.7];

  return (
    <>
      <Text
        fontSize={0.8}
        font={fonts.raleway}
        position={[0, 2, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Logic Gates
      </Text>

      <group position={[0, -0.3, 0]}>
        <SingleGate f={(v) => !v} scale={scale} position={[-1.7, 0, -1.7]} />
        <DoubleGate
          f={(v1, v2) => v1 !== v2}
          scale={scale}
          position={[1.7, 0, 1.7]}
        />
      </group>
      <Plane />
    </>
  );
}
