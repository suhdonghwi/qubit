import { ThreeElements } from "@react-three/fiber";
import { animated, AnimatedProps } from "@react-spring/three";

export default function DoubleSlits(props: AnimatedProps<ThreeElements["group"]>) {
  return (
    <animated.group {...props}>
      <mesh position={[-2.8, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.4, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[2.8, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.4, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>
    </animated.group>
  );
}
