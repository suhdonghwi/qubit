import FunctionPlane from "../FunctionPlane";
import { GraphicContentProps } from "types/Scene";

import Plane from "../Plane";
import bell from "utils/BellFunction";

function f(x: number, y: number, anim: number) {
  const spread = 1.5 - anim * 1.2,
    amplitude = 5;

  const xOffset = anim * 0.4,
    yOffset = anim * 0.8;

  return bell(spread, amplitude, xOffset, yOffset, x, y);
}

export default function WaveFunctionGraphic({
  paragraphIndex,
}: GraphicContentProps) {
  return (
    <>
      <FunctionPlane run={paragraphIndex > 0} f={f} />
      <Plane />
    </>
  );
}
