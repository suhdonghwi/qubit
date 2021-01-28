import { GroupProps } from "react-three-fiber";

import { animated, AnimatedProps } from "@react-spring/three";

export default function SingleSlit(props: AnimatedProps<GroupProps>) {
  return (
    <animated.group {...props}>
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
