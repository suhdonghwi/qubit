import Plane from "../Plane";
import SingleGate from "./SingleGate";

export default function NotGateGraphic() {
  return (
    <>
      <SingleGate name="Not" f={(v: boolean) => !v} />
      <Plane />
    </>
  );
}
