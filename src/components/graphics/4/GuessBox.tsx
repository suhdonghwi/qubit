import { Text } from "@react-three/drei";

import { animated } from "@react-spring/three";
import fonts from "fonts.json";

interface GuessBoxProps {
  boxOpacity: number;
  inputScale: [number, number, number];
  lightOpacity: number;
  outputOpacity: number;
  correct: boolean;
}

export default function GuessGraphic({
  boxOpacity,
  inputScale,
  lightOpacity,
  outputOpacity,
  correct,
}: GuessBoxProps) {
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
        it's {correct ? "correct!" : "wrong"}
        <animated.meshBasicMaterial transparent opacity={outputOpacity} />
      </Text>
    </>
  );
}
