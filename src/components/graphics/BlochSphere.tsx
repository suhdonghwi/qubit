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
  phi,
  theta,
  ...props
}: BlochSphereProps & MeshProps) {
  return (
    <mesh {...props}>
      <mesh rotation={[-Math.PI / 2, 0, Math.PI]} castShadow>
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

        <group rotation={[phi, theta, 0]}>
          <mesh
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, radius / 2 - 0.1]}
          >
            <cylinderBufferGeometry args={[0.06, 0.06, radius - 0.2, 32, 32]} />
            <meshLambertMaterial color="#eb0c0c" />

            <mesh position={[0, radius / 2, 0]}>
              <cylinderBufferGeometry args={[0, 0.1, 0.2, 32, 32]} />
              <meshLambertMaterial color="#eb0c0c" />
            </mesh>
          </mesh>

          <mesh visible={false}>
            <sphereBufferGeometry args={[radius, 1, 1]} />
          </mesh>
        </group>

        {/*
        <AxisArrow
          dir={
            new Vector3(
              Math.cos(phi) * Math.sin(theta),
              Math.sin(phi) * Math.sin(theta),
              Math.cos(theta)
            )
          }
          color="#eb0c0c"
          radius={radius}
          />*/}
      </mesh>
    </mesh>
  );
}
