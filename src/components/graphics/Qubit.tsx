import { MeshProps } from "react-three-fiber";

import { animated, useSpring } from "@react-spring/three";
import interpolate from "color-interpolate";

import WobblySphere from "./WobblySphere";

interface QubitProps {
  oneProbability: number;
  size: number;
}

export default function Qubit({
  oneProbability,
  size,
  ...props
}: QubitProps & MeshProps) {
  const colormap = interpolate(["#339af0", "#f06595"]),
    unstability = -2 * Math.abs(oneProbability - 0.5) + 1;
  const { factor, color } = useSpring({
    factor: unstability * 0.2,
    color: colormap(oneProbability),
  });
  const AnimatedSphere = animated(WobblySphere);

  return (
    <AnimatedSphere size={size} factor={factor} color={color} {...props} />
  );
}
