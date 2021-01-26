import { useState } from "react";

import Plane from "../Plane";
import Qubit from "../Qubit";
import Button from "../Button";

export default function SuperpositionGraphic() {
  const [pushed, setPushed] = useState(false);
  const probability = pushed ? Math.round(Math.random()) : 0.5;

  return (
    <>
      <Button
        position={[0, -2.75, 2]}
        onDown={() => setPushed(true)}
        onUp={() => setPushed(false)}
      />
      <Qubit oneProbability={probability} position={[0, 0.5, 0]} />
      <Plane />;
    </>
  );
}
