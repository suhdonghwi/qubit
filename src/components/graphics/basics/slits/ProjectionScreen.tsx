import { animated, SpringValue } from "@react-spring/three";

interface ProjectionScreenProps {
  opacity?: SpringValue<number> | number;
}

export default function ProjectionScreen({ opacity }: ProjectionScreenProps) {
  return (
    <mesh position={[0, -0.5, -4.35]}>
      <boxBufferGeometry args={[9, 5, 0.3]} />
      <animated.meshLambertMaterial
        color="#ced4da"
        transparent
        opacity={opacity}
      />
    </mesh>
  );
}
