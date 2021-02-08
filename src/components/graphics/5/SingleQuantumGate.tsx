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
  const geometry = new THREE.TorusBufferGeometry(radius, 0.2, 64, 64);
  geometry.computeBoundingBox();

  const material = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color("#e03131"),
      },
      color2: {
        value: new THREE.Color("#6741d9"),
      },
      bboxMin: {
        value: geometry.boundingBox?.min,
      },
      bboxMax: {
        value: geometry.boundingBox?.max,
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
    }
  `,
  });

  return (
    <group>
      <mesh castShadow material={material} geometry={geometry} />

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
