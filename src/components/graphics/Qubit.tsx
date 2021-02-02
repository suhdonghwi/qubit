import * as THREE from "three";
import { useFrame } from "react-three-fiber";

export default function Qubit() {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      color1: {
        value: new THREE.Color("#e03131"),
      },
      color2: {
        value: new THREE.Color("#3b5bdb"),
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
    //material.uniforms.offset.value += 0.01;
  });

  return (
    <mesh material={material} rotation={[0, -Math.PI / 4, Math.PI / 2]}>
      <sphereBufferGeometry args={[1, 64, 64]} />
    </mesh>
  );
}
