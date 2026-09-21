import { useSceneRunning } from "components/graphics/SceneRuntime";
import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";

import Plane from "../Plane";
import Bit from "../Bit";
import fonts from "fonts.json";

export default function BitCountGraphic() {
  const [num, setNum] = useState(0);
  const binString = num.toString(2).padStart(3, "0").split("");

  const running = useSceneRunning();
  useEffect(() => {
    if (!running) return;
    function update() {
      setNum((value) => (value + 1) % 8);
    }

    const id = setInterval(update, 500);
    return () => clearInterval(id);
  }, [running]);

  return (
    <>
      <Text
        fontSize={1.4}
        font={fonts.raleway}
        position={[0, 2, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        {num}
      </Text>

      <group position={[0, -0.5, 0]}>
        {binString.map((n, i) => (
          <Bit
            key={i}
            one={n === "1"}
            radius={0.6}
            position={[-1.2 + 1.2 * i, 0, -1.2 + 1.2 * i]}
          />
        ))}
      </group>

      <Plane />
    </>
  );
}
