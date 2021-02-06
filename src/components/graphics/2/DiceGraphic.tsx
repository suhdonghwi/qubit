import { Suspense } from "react";
import Plane from "../Plane";
import DiceModel from "../models/DiceModel";

export default function DiceGraphic() {
  return (
    <>
      <Suspense fallback={null}>
        <DiceModel position={[0, 1, 0]} />
      </Suspense>
      <Plane />
    </>
  );
}
