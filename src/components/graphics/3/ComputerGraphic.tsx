import { Suspense } from "react";
import Plane from "../Plane";
import ComputerModel from "../models/ComputerModel";

import Qubit from "../Qubit";
import Bit from "../Bit";

export default function ComputerGraphic() {
  return (
    <>
      <Suspense fallback={null}>
        <ComputerModel
          rotation={[0, Math.PI, 0]}
          scale={[7, 7, 7]}
          position={[0, -2, 1]}
        />
      </Suspense>
      <Bit one radius={0.4} position={[0, 3, 0]} />
      <Bit one={false} radius={0.4} position={[0, 4, 0]} />
      <Qubit oneProbability={0.5} radius={0.4} position={[2, 4, 0]} />

      <Plane />
    </>
  );
}
