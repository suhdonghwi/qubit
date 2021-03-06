import { MeshProps } from "react-three-fiber";

import { Text } from "@react-three/drei";
import fonts from "fonts.json";

interface BitProps {
  one: boolean;
  radius: number;
}

export default function Bit({ one, radius, ...props }: BitProps & MeshProps) {
  return (
    <mesh castShadow rotation={[0, -Math.PI / 4, Math.PI / 2]} {...props}>
      <sphereBufferGeometry args={[radius, 64, 64]} />
      <meshLambertMaterial color={one ? "#ff6b6b" : "#339af0"} />
      <Text
        fontSize={radius * 1.4}
        font={fonts.raleway}
        position={[radius * 0.6, 0, radius]}
        rotation={[0, 0, -Math.PI / 2]}
        renderOrder={-1}
      >
        {one ? "1" : "0"}
      </Text>
    </mesh>
  );
}
