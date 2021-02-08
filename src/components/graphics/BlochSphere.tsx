import { Vector3 } from "three";
import { Text } from "@react-three/drei";

import fonts from "fonts.json";
import { MeshProps } from "react-three-fiber";

function AxisArrow({
  dir,
  radius,
  color,
}: {
  dir: Vector3;
  radius: number;
  color?: string;
}) {
  return (
    <arrowHelper
      args={[
        dir,
        new Vector3(0, 0, 0),
        radius,
        color || "#868e96",
        radius * 0.1,
        radius * 0.07,
      ]}
    />
  );
}

interface BlochSphereProps {
  radius: number;
  theta: number;
  phi: number;
}

export default function BlochSphere({
  radius,
  theta,
  phi,
  ...props
}: BlochSphereProps & MeshProps) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, Math.PI]} castShadow {...props}>
      <sphereBufferGeometry args={[radius, 32, 32]} />
      <meshLambertMaterial color="#f8f9fa" transparent opacity={0.2} />

      <mesh>
        <torusBufferGeometry args={[radius, 0.02, 64, 64]} />
        <meshLambertMaterial color="#f8f9fa" />
      </mesh>

      <AxisArrow dir={new Vector3(1, 0, 0)} radius={radius * 1.4} />
      <Text
        fontSize={radius * 0.25}
        font={fonts.raleway}
        position={[radius * 1.6, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        color="#adb5bd"
        renderOrder={-1}
      >
        X
      </Text>

      <AxisArrow dir={new Vector3(0, 1, 0)} radius={radius * 1.4} />
      <Text
        fontSize={radius * 0.25}
        font={fonts.raleway}
        position={[0, radius * 1.6, 0]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        color="#adb5bd"
        renderOrder={-1}
      >
        Y
      </Text>

      <AxisArrow dir={new Vector3(0, 0, 1)} radius={radius * 1.4} />
      <Text
        fontSize={radius * 0.25}
        font={fonts.raleway}
        position={[0, 0, radius * 1.6]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        color="#adb5bd"
        renderOrder={-1}
      >
        Z
      </Text>

      <Text
        fontSize={radius * 0.3}
        font={fonts.raleway}
        position={[0, radius * 0.25, radius * 1.3]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        color="#adb5bd"
        renderOrder={-1}
      >
        0
      </Text>

      <Text
        fontSize={radius * 0.3}
        font={fonts.raleway}
        position={[0, 0, -radius * 1.2]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        color="#adb5bd"
        renderOrder={-1}
      >
        1
      </Text>

      <AxisArrow
        dir={
          new Vector3(
            Math.cos(phi) * Math.sin(theta),
            Math.sin(phi) * Math.sin(theta),
            Math.cos(theta)
          )
        }
        color="#e00b0b"
        radius={radius}
      />
    </mesh>
  );
}
