import * as THREE from "three";
import { useFrame, MeshProps } from "react-three-fiber";

import { animated, useSpring } from "@react-spring/three";
import { Text } from "@react-three/drei";
import fonts from "fonts.json";

interface QubitProps {
  oneProbability: number;
  radius: number;
}

export default function Qubit({
  oneProbability,
  radius,
  ...props
}: QubitProps & MeshProps) {
  const { offset, zeroOpacity, oneOpacity } = useSpring({
    offset: -(oneProbability * 1.4 - 0.7),
    zeroOpacity: 1 - oneProbability,
    oneOpacity: oneProbability,
  });

  const material = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color("#fa5252"),
      },
      color2: {
        value: new THREE.Color("#364fc7"),
      },
      offset: { value: 0 },
    },
    vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
    uniform float offset;
  
    varying vec2 vUv;
    
    void main() {
      gl_FragColor = vec4(mix(color1, color2, vUv.y + offset), 1.0);
    }
  `,
  });

  useFrame(() => {
    material.uniforms.offset.value = offset.get();
  });

  return (
    <mesh
      castShadow
      material={material}
      rotation={[0, -Math.PI / 4, Math.PI / 2]}
      {...props}
    >
      <sphereBufferGeometry args={[radius, 64, 64]} />
      <group
        position={[radius * 0.6, 0, radius]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <Text fontSize={radius * 1.4} font={fonts.raleway}>
          <animated.meshBasicMaterial color="white" opacity={zeroOpacity} />0
        </Text>
        <Text fontSize={radius * 1.4} font={fonts.raleway}>
          <animated.meshBasicMaterial color="white" opacity={oneOpacity} />1
        </Text>
      </group>
    </mesh>
  );
}
