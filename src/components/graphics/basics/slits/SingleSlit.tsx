import { animated, SpringValue } from "@react-spring/three";

interface SingleSlitProps {
  position?: SpringValue<[number, number, number]>;
}

export default function SingleSlit({ position }: SingleSlitProps) {
  return (
    <animated.group position={position as any}>
      <mesh position={[-2.4, 0, 0]} castShadow>
        <boxBufferGeometry args={[4.3, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[2.4, 0, 0]} castShadow>
        <boxBufferGeometry args={[4.3, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>
    </animated.group>
  );
}
