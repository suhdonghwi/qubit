import { Suspense } from "react";
import Cube from "../models/CubeModel";
import Plane from "../Plane";

export default function CubeGraphic() {
  return (
    <>
      <Suspense fallback={null}>
        <Cube position={[0, 1, 0]} scale={[9, 9, 9]} />
      </Suspense>
      <Plane />
    </>
  );
}
