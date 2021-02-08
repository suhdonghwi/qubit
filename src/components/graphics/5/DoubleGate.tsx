import { useState, useEffect } from "react";
import { Text } from "@react-three/drei";

import fonts from "fonts.json";
import Bit from "../Bit";
import { GroupProps } from "react-three-fiber";

interface SingleGateProps {
  name?: string;
  f: (input1: boolean, input2: boolean) => boolean;
}

export default function SingleGate({
  name,
  f,
  ...props
}: SingleGateProps & GroupProps) {
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (input1 && input2) {
        setInput1(false);
        setInput2(false);
      } else {
        if (input2) {
          setInput1(true);
          setInput2(false);
        } else {
          setInput2(true);
        }
      }
    }, 500);

    return () => clearInterval(id);
  }, [input1, input2]);

  return (
    <group {...props}>
      <mesh castShadow position={[0, -2, 0]}>
        <boxBufferGeometry args={[3, 2, 3]} />
        <meshLambertMaterial color="#868e96" />

        <Text
          fontSize={0.4}
          font={fonts.raleway}
          position={[-1.55, 0.5, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          input
        </Text>

        <Text
          fontSize={0.4}
          font={fonts.raleway}
          position={[0, 0.5, 1.55]}
          rotation={[0, 0, 0]}
        >
          output
        </Text>

        {name && (
          <Text
            fontSize={0.8}
            font={fonts.raleway}
            position={[0, 3, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            {name} Gate
          </Text>
        )}

        <mesh castShadow position={[-1.5, -0.2, -0.5]}>
          <boxBufferGeometry args={[0.05, 0.3, 0.3]} />
          <meshLambertMaterial color="#e9ecef" />
        </mesh>

        <mesh castShadow position={[-1.5, -0.2, 0.5]}>
          <boxBufferGeometry args={[0.05, 0.3, 0.3]} />
          <meshLambertMaterial color="#e9ecef" />
        </mesh>

        <mesh castShadow position={[0, -0.2, 1.5]}>
          <boxBufferGeometry args={[0.3, 0.3, 0.05]} />
          <meshLambertMaterial color="#e9ecef" />
        </mesh>

        <mesh
          castShadow
          position={[-2.5, -0.2, -0.5]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderBufferGeometry args={[0.05, 0.05, 2, 64]} />
          <meshLambertMaterial color="#e9ecef" />
        </mesh>

        <mesh
          castShadow
          position={[-2.5, -0.2, 0.5]}
          rotation={[0, 0, Math.PI / 2]}
        >
          <cylinderBufferGeometry args={[0.05, 0.05, 2, 64]} />
          <meshLambertMaterial color="#e9ecef" />
        </mesh>

        <mesh
          castShadow
          position={[0, -0.2, 2.5]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <cylinderBufferGeometry args={[0.05, 0.05, 2, 64]} />
          <meshLambertMaterial color="#e9ecef" />
        </mesh>
      </mesh>

      <Bit one={input1} radius={0.3} position={[-3.5, -2.2, -0.5]} />
      <Bit one={input2} radius={0.3} position={[-3.5, -2.2, 0.5]} />
      <Bit one={f(input1, input2)} radius={0.3} position={[0, -2.2, 3.5]} />
    </group>
  );
}
