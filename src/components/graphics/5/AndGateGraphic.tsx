import Plane from "../Plane";
import DoubleGate from "./DoubleGate";

export default function AndGateGraphic() {
  return (
    <>
      <DoubleGate name="And" f={(v1: boolean, v2: boolean) => v1 && v2} />
      <Plane />
    </>
  );
}
