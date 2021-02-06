import { Suspense } from "react";
import { Text } from "@react-three/drei";

import Plane from "../Plane";
import DiceModel from "../models/DiceModel";
import fonts from "fonts.json";

export default function DiceGraphic() {
  return (
    <>
      <Text
        fontSize={1}
        font={fonts.raleway}
        position={[0, 3, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Which number?
      </Text>

      <Suspense fallback={null}>
        <DiceModel position={[0, -1, 0]} xDelta={0} yDelta={0.2} />
      </Suspense>
      <Plane />
    </>
  );
}
