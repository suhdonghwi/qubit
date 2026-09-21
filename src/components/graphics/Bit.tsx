import { ThreeElements } from "@react-three/fiber";

import { Text } from "@react-three/drei";
import fonts from "fonts";

interface BitProps {
  one: boolean;
  radius: number;
}

export default function Bit({
  one,
  radius,
  ...props
}: BitProps & ThreeElements["mesh"]) {
  return (
    <mesh castShadow rotation={[0, -Math.PI / 4, Math.PI / 2]} {...props}>
      <sphereGeometry args={[radius, 24, 16]} />
      <meshLambertMaterial color={one ? "#ff6b6b" : "#339af0"} />
      <Text
        fontSize={radius * 1.4}
        font={fonts.pretendard}
        position={[radius * 0.6, 0, radius]}
        rotation={[0, 0, -Math.PI / 2]}
        renderOrder={-1}
      >
        {one ? "1" : "0"}
      </Text>
    </mesh>
  );
}
