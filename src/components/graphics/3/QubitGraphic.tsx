import { useEffect, useState } from "react";
import { Text } from "@react-three/drei";

import Plane from "../Plane";
import Qubit from "../Qubit";
import fonts from "fonts.json";

export default function QubitGraphic() {
  const [prob, setProb] = useState(0.3);

  useEffect(() => {
    function update() {
      if (prob > 0.5) {
        setProb(0.3);
      } else {
        setProb(0.7);
      }
    }

    const id = setInterval(update, 700);

    return () => clearInterval(id);
  });

  return (
    <>
      <Text
        fontSize={1}
        font={fonts.raleway}
        position={[0, 3, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Qubit
      </Text>

      <Qubit oneProbability={prob} radius={1.5} />

      <Plane />
    </>
  );
}
