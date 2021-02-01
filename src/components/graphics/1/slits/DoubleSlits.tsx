import { GroupProps } from "react-three-fiber";
import { animated, AnimatedProps } from "@react-spring/three";

export default function DoubleSlits(props: AnimatedProps<GroupProps>) {
  return (
    <animated.group {...props}>
      <mesh position={[-2.8, 0, 0]} castShadow receiveShadow>
        <boxBufferGeometry args={[3.4, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[2.8, 0, 0]} castShadow receiveShadow>
        <boxBufferGeometry args={[3.4, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>

      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxBufferGeometry args={[1.5, 3, 0.15]} />
        <meshLambertMaterial color="#ced4da" />
      </mesh>
    </animated.group>
  );
}
