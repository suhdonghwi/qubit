import { animated, SpringValue } from "@react-spring/three";

interface DoubleSlitsProps {
  position?: SpringValue<[number, number, number]> | [number, number, number];
}

export default function DoubleSlits({ position }: DoubleSlitsProps) {
  return (
    <animated.group position={position as any}>
      <mesh position={[-2.8, 0, 0]} castShadow>
        <boxBufferGeometry args={[3.4, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[2.8, 0, 0]} castShadow>
        <boxBufferGeometry args={[3.4, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[0, 0, 0]} castShadow>
        <boxBufferGeometry args={[1.5, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>
    </animated.group>
  );
}
