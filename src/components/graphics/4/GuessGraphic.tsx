import { useState } from "react";
import Plane from "../Plane";
import { Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

import Button from "../Button";
import Bit from "../Bit";
import fonts from "fonts.json";

export default function GuessGraphic() {
  const [pressed, setPressed] = useState(false);

  const {
    inputScale,
    bitsPosition,
    boxOpacity,
    lightOpacity,
    outputOpacity,
  } = useSpring<{
    inputScale: any;
    bitsPosition: any;
    boxOpacity: number;
    lightOpacity: number;
    outputOpacity: number;
  }>({
    from: {
      inputScale: [1, 1, 0],
      bitsPosition: [-1.1, 2, 0],
      boxOpacity: 1,
      lightOpacity: 0,
      outputOpacity: 0,
    },
    to: async (next) => {
      if (pressed) {
        await next({ inputScale: [1, 1, 1], config: { duration: 500 } });
        await next({
          bitsPosition: [-1.1, -2, 0],
          config: { duration: 1000 },
          delay: 500,
        });
        await next({ boxOpacity: 0.5 });
        await next({ lightOpacity: 0.5, delay: 300 });
        await next({ boxOpacity: 1, delay: 700 });
        await next({ outputOpacity: 1, delay: 200 });
      }
    },
  });

  return (
    <>
      <mesh position={[0, -1.5, 0]}>
        <boxBufferGeometry args={[4, 2, 4]} />
        <animated.meshLambertMaterial
          color="#868e96"
          transparent
          opacity={boxOpacity}
        />

        <animated.mesh position={[-1.1, 1, 0]} scale={inputScale}>
          <boxBufferGeometry args={[0.7, 0.05, 3]} />
          <animated.meshLambertMaterial
            color="#343a40"
            transparent
            opacity={boxOpacity}
          />
        </animated.mesh>

        <Text
          fontSize={0.7}
          font={fonts.raleway}
          position={[0.5, 1.1, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          Input
        </Text>
      </mesh>

      <animated.group position={bitsPosition}>
        <Bit
          one={false}
          radius={0.3}
          position={[0, 0, -1]}
          castShadow={false}
        />
        <Bit one={false} radius={0.3} position={[0, 0, 0]} castShadow={false} />
        <Bit one={true} radius={0.3} position={[0, 0, 1]} castShadow={false} />
      </animated.group>

      <group>
        {[0, 1, 2].map((n) => (
          <mesh key={n} position={[1.5, -2, n - 1]}>
            <boxBufferGeometry args={[0.3, 0.3, 0.5]} />
            <meshLambertMaterial color="#343a40" />

            <mesh
              position={[-1.3, 0, 0]}
              rotation={[0, 0, Math.PI / 2]}
              renderOrder={-1}
            >
              <cylinderGeometry args={[0.3, 0.05, 2.3, 16]} />
              <animated.meshLambertMaterial
                color="#ffe066"
                transparent
                opacity={lightOpacity}
              />
            </mesh>
          </mesh>
        ))}
      </group>

      <Text
        fontSize={0.8}
        font={fonts.raleway}
        position={[0, 2, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Output: Wrong
        <animated.meshBasicMaterial transparent opacity={outputOpacity} />
      </Text>

      <Button
        click={pressed}
        onClick={() => setPressed(true)}
        position={[-3, -2.75, 3]}
      />
      <Plane />
    </>
  );
}
