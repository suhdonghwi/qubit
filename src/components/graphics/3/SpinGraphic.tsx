import { useRef } from "react";
import { useFrame, GroupProps } from "react-three-fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

import Plane from "../Plane";
import fonts from "fonts.json";

function Spinner(props: GroupProps) {
  const groupRef = useRef<THREE.Group>();

  useFrame(() => {
    if (groupRef.current !== undefined) {
      groupRef.current.rotation.y -= 0.1;
    }
  });

  return (
    <group ref={groupRef} {...props}>
      <mesh position={[0, 0, 0]} castShadow>
        <sphereBufferGeometry args={[1, 64, 64]} />
        <meshLambertMaterial color="#5c7cfa" />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusBufferGeometry args={[1.3, 0.05, 16, 64, Math.PI * 1.3]} />
        <meshLambertMaterial color="#bac8ff" />
      </mesh>

      <mesh position={[1.3, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderBufferGeometry args={[0.15, 0, 0.3, 16]} />
        <meshLambertMaterial color="#bac8ff" />
      </mesh>

      <mesh position={[0, 0, 0]} castShadow>
        <cylinderBufferGeometry args={[0.05, 0.05, 4.5, 16]} />
        <meshLambertMaterial color="#bac8ff" />
      </mesh>

      <mesh position={[0, 2.25, 0]} castShadow>
        <cylinderBufferGeometry args={[0, 0.15, 0.3, 16]} />
        <meshLambertMaterial color="#bac8ff" />
      </mesh>
    </group>
  );
}

export default function SpinGraphic() {
  return (
    <>
      <Spinner position={[-1.5, 0.5, -1.5]} />
      <Text
        fontSize={1}
        font={fonts.raleway}
        position={[-1.5, 4, -1.5]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Up
      </Text>

      <Spinner position={[1.5, 0.5, 1.5]} rotation={[Math.PI, 0, 0]} />
      <Text
        fontSize={1}
        font={fonts.raleway}
        position={[1.5, 4, 1.5]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        Down
      </Text>
      <Plane />
    </>
  );
}
