import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";

import Plane from "../Plane";
import Qubit from "../Qubit";
import fonts from "fonts.json";

export default function BitCountGraphic() {
  const [probs, setProbs] = useState([0.5, 0.5, 0.5]);

  useEffect(() => {
    function rand() {
      return 0.7 - Math.random() * 0.4;
    }

    function update() {
      setProbs([rand(), rand(), rand()]);
    }

    const id = setInterval(update, 700);
    return () => clearInterval(id);
  });

  return (
    <>
      <Text
        fontSize={1}
        font={fonts.raleway}
        position={[0, 2, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        0 ~ 7 at once!
      </Text>

      <group position={[0, -0.5, 0]}>
        {probs.map((p, i) => (
          <Qubit
            key={i}
            oneProbability={p}
            radius={0.6}
            position={[-1.2 + 1.2 * i, 0, -1.2 + 1.2 * i]}
          />
        ))}
      </group>

      <Plane />
    </>
  );
}
