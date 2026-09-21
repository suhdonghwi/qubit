import { useMemo, useRef } from "react";
import { Color, DoubleSide, ShaderMaterial } from "three";
import type { ThreeElements } from "@react-three/fiber";
import { useSceneFrame } from "../../SceneRuntime";

const vertexShader = `
  uniform float time;
  uniform float xOffset;
  uniform float yOffset;
  uniform float frequency;
  uniform float amplitude;
  varying vec3 vNormal;
  void main() {
    vec2 left = vec2(position.x - xOffset, position.y + yOffset);
    vec2 right = vec2(position.x + xOffset, position.y + yOffset);
    float dl = max(length(left), 0.0001);
    float dr = max(length(right), 0.0001);
    float pl = dl * frequency - time;
    float pr = dr * frequency - time;
    vec3 p = position;
    p.z = amplitude * (sin(pl) + sin(pr));
    vec2 gradient = amplitude * frequency * (cos(pl) * left / dl + cos(pr) * right / dr);
    vNormal = normalize(normalMatrix * vec3(-gradient, 1.0));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;
const fragmentShader = `
  uniform vec3 color;
  varying vec3 vNormal;
  void main() {
    float light = 0.45 + 0.55 * abs(dot(normalize(vNormal), normalize(vec3(0.4, 0.8, 0.7))));
    gl_FragColor = vec4(color * light, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

interface WaveProps {
  xOffset: number;
  yOffset: number;
  frequency: number;
  amplitude: number;
  width: number;
  height: number;
  lod?: number;
}

export default function Wave({ xOffset, yOffset, frequency, amplitude, width, height, lod = 32, ...props }: WaveProps & ThreeElements["mesh"]) {
  const material = useRef<ShaderMaterial>(null);
  const uniforms = useMemo(() => ({
    time: { value: 0 }, xOffset: { value: xOffset }, yOffset: { value: yOffset },
    frequency: { value: frequency }, amplitude: { value: amplitude }, color: { value: new Color("#ced4da") },
  }), [xOffset, yOffset, frequency, amplitude]);
  useSceneFrame((_, delta) => {
    if (material.current) material.current.uniforms.time.value += delta * 10;
  });
  return <mesh rotation={[Math.PI / 2, 0, 0]} {...props} frustumCulled={false}>
    <planeGeometry args={[width, height, Math.max(lod, 48), Math.max(lod, 48)]} />
    <shaderMaterial ref={material} uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} side={DoubleSide} />
  </mesh>;
}
