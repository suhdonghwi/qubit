import { useMemo, useRef } from "react";
import { useSceneFrame } from "components/graphics/SceneRuntime";
import * as THREE from "three";
import { ThreeElements } from "@react-three/fiber";

import { animated } from "@react-spring/three";
import { Text } from "@react-three/drei";
import fonts from "fonts";

interface QubitProps {
  oneProbability: number;
  radius: number;
}

export default function Qubit({
  oneProbability,
  radius,
  ...props
}: QubitProps & ThreeElements["mesh"]) {
  const offset = -(oneProbability * 1.4 - 0.7);

  const material = useRef<THREE.ShaderMaterial>(null);
  const shader = useMemo(
    () => ({
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
      gl_FragColor = vec4(mix(color1, color2, clamp(vUv.y + offset, 0.0, 1.0)), 1.0);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `,
    }),
    [],
  );

  useSceneFrame(() => {
    if (material.current) material.current.uniforms.offset.value = offset;
  });

  return (
    <mesh castShadow rotation={[0, -Math.PI / 4, Math.PI / 2]} {...props}>
      <shaderMaterial
        ref={material}
        {...shader}
        uniforms-offset-value={offset}
      />
      <sphereGeometry args={[radius, 24, 16]} />
      <group
        position={[radius * 0.6, 0, radius]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <Text fontSize={radius * 1.4} font={fonts.pretendard} renderOrder={-1}>
          <animated.meshBasicMaterial
            color="white"
            transparent
            opacity={1 - oneProbability}
          />
          0
        </Text>
        <Text
          position={[0, 0, 0.05]}
          fontSize={radius * 1.4}
          font={fonts.pretendard}
          renderOrder={-1}
        >
          <animated.meshBasicMaterial
            color="white"
            transparent
            opacity={oneProbability}
          />
          1
        </Text>
      </group>
    </mesh>
  );
}
