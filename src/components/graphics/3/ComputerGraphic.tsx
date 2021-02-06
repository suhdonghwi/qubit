import { Suspense } from "react";
import Plane from "../Plane";
import ComputerModel from "../models/ComputerModel";

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

      <Plane />
    </>
  );
}
