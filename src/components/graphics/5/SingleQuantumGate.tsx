import { useMemo } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";

import fonts from "fonts.json";

interface SingleQuantumGateProps {
  radius: number;
  name: string;
}

export default function SingleQuantumGate({
  radius,
  name,
}: SingleQuantumGateProps) {
  const shader = useMemo(() => ({
    uniforms: {
      color1: {
        value: new THREE.Color("#e03131"),
      },
      color2: {
        value: new THREE.Color("#6741d9"),
      },
      bboxMin: {
        value: new THREE.Vector3(-radius - 0.2, -radius - 0.2, -0.2),
      },
      bboxMax: {
        value: new THREE.Vector3(radius + 0.2, radius + 0.2, 0.2),
      },
    },
    vertexShader: `
    uniform vec3 bboxMin;
    uniform vec3 bboxMax;
  
    varying vec2 vUv;

    void main() {
      vUv.y = (position.y - bboxMin.y) / (bboxMax.y - bboxMin.y);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
    fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
  
    varying vec2 vUv;
    
    void main() {
      
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `,
  }), [radius]);

  return (
    <group>
      <mesh castShadow>
        <torusGeometry args={[radius, 0.2, 12, 64]} />
        <shaderMaterial {...shader} />
      </mesh>

      <Text
        fontSize={0.8}
        font={fonts.raleway}
        position={[0, 4, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        {name} Gate
      </Text>
    </group>
  );
}
